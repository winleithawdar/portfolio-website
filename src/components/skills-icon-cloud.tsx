"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type SkillIconCloudProps = {
  items: ReadonlyArray<{
    label: string;
    src: string;
  }>;
  className?: string;
};

const ICON_SIZE = 38;
const ICON_SIZE_COMPACT = 31;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SkillsIconCloud({
  items,
  className = "",
}: SkillIconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadedImagesRef = useRef<HTMLImageElement[]>([]);
  const animationFrameRef = useRef<number>(0);
  const rotationRef = useRef({ x: -0.26, y: 0.48 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const pointerRef = useRef({ x: 210, y: 210 });
  const requestDrawRef = useRef<() => void>(() => {});
  const [cloudSize, setCloudSize] = useState(420);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const iconPoints = useMemo(() => {
    const total = Math.max(items.length, 1);
    const offset = 2 / total;
    const increment = Math.PI * (3 - Math.sqrt(5));

    return items.map((_, index) => {
      const y = index * offset - 1 + offset / 2;
      const radius = Math.sqrt(1 - y * y);
      const phi = index * increment;

      return {
        id: index,
        x: Math.cos(phi) * radius,
        y,
        z: Math.sin(phi) * radius,
      };
    });
  }, [items]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      const nextWidth = entry.contentRect.width;
      const nextSize = clamp(Math.round(nextWidth - 12), 244, 540);
      setCloudSize(nextSize);
      pointerRef.current = { x: nextSize / 2, y: nextSize / 2 };
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    loadedImagesRef.current = [];

    items.forEach((item, index) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.decoding = "async";
      image.src = item.src;
      image.onload = () => {
        if (!isCancelled) {
          loadedImagesRef.current[index] = image;
          requestDrawRef.current();
        }
      };
    });

    return () => {
      isCancelled = true;
    };
  }, [items]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || iconPoints.length === 0) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = cloudSize * pixelRatio;
    canvas.height = cloudSize * pixelRatio;
    canvas.style.width = `${cloudSize}px`;
    canvas.style.height = `${cloudSize}px`;

    const isCompact = cloudSize < 320;
    const iconBaseSize = isCompact ? ICON_SIZE_COMPACT : ICON_SIZE;
    const radius = cloudSize * (isCompact ? 0.31 : 0.37);
    const depth = cloudSize * (isCompact ? 1.08 : 1.18);
    const center = cloudSize / 2;

    let isVisible = false;

    const draw = () => {
      animationFrameRef.current = 0;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, cloudSize, cloudSize);
      context.imageSmoothingEnabled = true;

      const dx = pointerRef.current.x - center;
      const dy = pointerRef.current.y - center;

      if (!prefersReducedMotion && !isDraggingRef.current) {
        rotationRef.current = {
          x: rotationRef.current.x + dy * 0.00001,
          y: rotationRef.current.y + 0.0019 + dx * 0.00001,
        };
      }

      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      const projected = iconPoints
        .map((point) => {
          const worldX = point.x * radius;
          const worldY = point.y * radius;
          const worldZ = point.z * radius;

          const rotatedX = worldX * cosY - worldZ * sinY;
          const rotatedZ = worldX * sinY + worldZ * cosY;
          const rotatedY = worldY * cosX + rotatedZ * sinX;
          const finalZ = worldZ * cosX - worldY * sinX;

          const perspective = depth / (depth - finalZ);
          const size = iconBaseSize * perspective;
          const opacity = clamp(
            (finalZ + radius * 1.3) / (radius * 2.3),
            0.34,
            1,
          );

          return {
            id: point.id,
            x: center + rotatedX * perspective,
            y: center + rotatedY * perspective,
            size,
            opacity,
            zIndex: finalZ,
          };
        })
        .sort((left, right) => left.zIndex - right.zIndex);

      const bounds = projected.reduce(
        (accumulator, icon) => ({
          minX: Math.min(accumulator.minX, icon.x - icon.size / 2),
          maxX: Math.max(accumulator.maxX, icon.x + icon.size / 2),
          minY: Math.min(accumulator.minY, icon.y - icon.size / 2),
          maxY: Math.max(accumulator.maxY, icon.y + icon.size / 2),
        }),
        {
          minX: Number.POSITIVE_INFINITY,
          maxX: Number.NEGATIVE_INFINITY,
          minY: Number.POSITIVE_INFINITY,
          maxY: Number.NEGATIVE_INFINITY,
        },
      );

      const offsetX = Number.isFinite(bounds.minX)
        ? center - (bounds.minX + bounds.maxX) / 2
        : 0;
      const offsetY = Number.isFinite(bounds.minY)
        ? center - (bounds.minY + bounds.maxY) / 2
        : 0;

      projected.forEach((icon) => {
        const image = loadedImagesRef.current[icon.id];

        if (!image) {
          return;
        }

        context.globalAlpha = icon.opacity;
        context.drawImage(
          image,
          icon.x + offsetX - icon.size / 2,
          icon.y + offsetY - icon.size / 2,
          icon.size,
          icon.size,
        );
      });
      context.globalAlpha = 1;

      // Keep spinning only while the cloud is on screen.
      if (isVisible && !prefersReducedMotion) {
        animationFrameRef.current = window.requestAnimationFrame(draw);
      }
    };

    const requestDraw = () => {
      if (!animationFrameRef.current) {
        animationFrameRef.current = window.requestAnimationFrame(draw);
      }
    };
    requestDrawRef.current = requestDraw;

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;

      if (isVisible) {
        requestDraw();
      }
    });
    visibilityObserver.observe(canvas);

    draw();

    return () => {
      visibilityObserver.disconnect();
      requestDrawRef.current = () => {};

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = 0;
      }
    };
  }, [cloudSize, iconPoints, prefersReducedMotion]);

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: event.clientX, y: event.clientY };
    const rect = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    if (!isDraggingRef.current) {
      return;
    }

    const deltaX = event.clientX - dragStartRef.current.x;
    const deltaY = event.clientY - dragStartRef.current.y;

    rotationRef.current = {
      x: rotationRef.current.x + deltaY * 0.0028,
      y: rotationRef.current.y + deltaX * 0.0028,
    };

    dragStartRef.current = { x: event.clientX, y: event.clientY };
    requestDrawRef.current();
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handlePointerCancel = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto aspect-square w-full max-w-[38rem] overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        width={cloudSize}
        height={cloudSize}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={handlePointerCancel}
        className="relative z-10 h-full w-full touch-none cursor-grab rounded-full active:cursor-grabbing"
        aria-label="Interactive skills icon cloud"
        role="img"
      />
    </div>
  );
}
