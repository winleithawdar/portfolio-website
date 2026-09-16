"use client";

import Image from "next/image";
import { useState } from "react";

export type JourneyImage = {
  src?: string;
  alt: string;
  label?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

export type JourneyAlbum = {
  label: string;
  title: string;
  caption: string;
  images: readonly JourneyImage[];
};

type JourneyAlbumsProps = {
  albums: readonly JourneyAlbum[];
};

type AlbumMotion = {
  direction: "previous" | "next";
  previousIndex: number;
  sequence: number;
};

function ChevronIcon({
  className,
  direction,
}: {
  className?: string;
  direction: "previous" | "next";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      {direction === "previous" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 6 6 6-6 6" />
      )}
    </svg>
  );
}

function JourneyVisual({
  ariaHidden = false,
  className,
  image,
  motionClassName = "",
}: {
  ariaHidden?: boolean;
  className?: string;
  image: JourneyImage;
  motionClassName?: string;
}) {
  const imageClassName =
    image.objectFit === "contain" ? "object-contain p-4 md:p-6" : "object-cover";

  if (!image.src) {
    return (
      <div
        aria-hidden={ariaHidden}
        className={`${className ?? ""} ${motionClassName} flex items-center justify-center bg-[color:var(--surface-soft)]`}
      >
        <span className="px-4 text-center font-[family-name:var(--font-display)] text-[1.35rem] leading-none tracking-[-0.04em] text-[color:var(--muted)] md:text-[1.65rem]">
          {image.label ?? image.alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={ariaHidden ? "" : image.alt}
      aria-hidden={ariaHidden}
      fill
      style={{
        objectPosition:
          image.objectPosition ??
          (image.objectFit === "contain" ? "center" : "50% 35%"),
      }}
      className={`${className ?? ""} ${imageClassName} ${motionClassName}`}
      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
    />
  );
}

export function JourneyAlbums({ albums }: JourneyAlbumsProps) {
  const [activeIndexes, setActiveIndexes] = useState<Record<number, number>>({});
  const [albumMotions, setAlbumMotions] = useState<Record<number, AlbumMotion>>({});

  function triggerAlbumMotion(
    albumIndex: number,
    direction: AlbumMotion["direction"],
    previousIndex: number,
  ) {
    setAlbumMotions((current) => ({
      ...current,
      [albumIndex]: {
        direction,
        previousIndex,
        sequence: (current[albumIndex]?.sequence ?? 0) + 1,
      },
    }));
  }

  function setAlbumImage(
    albumIndex: number,
    imageIndex: number,
    direction: AlbumMotion["direction"],
  ) {
    const previousIndex = activeIndexes[albumIndex] ?? 0;

    setActiveIndexes((current) => ({
      ...current,
      [albumIndex]: imageIndex,
    }));
    triggerAlbumMotion(albumIndex, direction, previousIndex);
  }

  function stepAlbum(albumIndex: number, direction: -1 | 1) {
    const imageCount = albums[albumIndex]?.images.length ?? 0;

    if (imageCount < 2) {
      return;
    }

    const activeIndex = activeIndexes[albumIndex] ?? 0;
    const nextIndex = (activeIndex + direction + imageCount) % imageCount;

    setActiveIndexes((current) => ({
      ...current,
      [albumIndex]: nextIndex,
    }));
    triggerAlbumMotion(
      albumIndex,
      direction === 1 ? "next" : "previous",
      activeIndex,
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {albums.map((album, albumIndex) => {
          const activeIndex = activeIndexes[albumIndex] ?? 0;
          const activeImage = album.images[activeIndex] ?? album.images[0];

          if (!activeImage) {
            return null;
          }

          const albumMotion = albumMotions[albumIndex];
          const previousImage =
            albumMotion && albumMotion.previousIndex !== activeIndex
              ? album.images[albumMotion.previousIndex]
              : undefined;
          const imageMotionClass =
            albumMotion?.direction === "previous"
              ? "journey-image-enter-previous"
              : albumMotion
                ? "journey-image-enter-next"
                : "";

          return (
            <article
              key={album.title}
              className="gallery-card group min-w-0"
            >
              <div className="overflow-hidden rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface)] transition duration-300 group-hover:border-[color:var(--border-strong)] md:rounded-[1.05rem]">
                <div className="relative aspect-[5/4] overflow-hidden">
                  {previousImage ? (
                    <JourneyVisual
                      ariaHidden
                      image={previousImage}
                      key={`${previousImage.src ?? previousImage.alt}-${albumMotion.sequence}-previous`}
                      className="absolute inset-0"
                      motionClassName={`${
                        albumMotion.direction === "previous"
                          ? "journey-image-exit-previous"
                          : "journey-image-exit-next"
                      }`}
                    />
                  ) : null}
                  <JourneyVisual
                    image={activeImage}
                    key={`${activeImage.src ?? activeImage.alt}-${albumMotion?.sequence ?? 0}`}
                    className="absolute inset-0 z-10"
                    motionClassName={imageMotionClass}
                  />
                  {album.images.length > 1 ? (
                    <>
                      <button
                        type="button"
                        aria-label={`Previous image in ${album.title}`}
                        onClick={() => stepAlbum(albumIndex, -1)}
                        className="focus-ring absolute left-2 top-1/2 z-20 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[color:var(--surface)]/60 text-[color:var(--foreground)] opacity-35 backdrop-blur transition hover:scale-105 hover:bg-[color:var(--surface)]/90 hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-75 md:left-3 md:h-8 md:w-8"
                      >
                        <ChevronIcon direction="previous" className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        aria-label={`Next image in ${album.title}`}
                        onClick={() => stepAlbum(albumIndex, 1)}
                        className="focus-ring absolute right-2 top-1/2 z-20 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[color:var(--surface)]/60 text-[color:var(--foreground)] opacity-35 backdrop-blur transition hover:scale-105 hover:bg-[color:var(--surface)]/90 hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-75 md:right-3 md:h-8 md:w-8"
                      >
                        <ChevronIcon direction="next" className="h-4 w-4" />
                      </button>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="px-1 pt-3 md:px-1.5">
                <div className="min-w-0">
                  <p className="text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-[color:var(--muted)] md:text-[0.64rem]">
                    {album.label}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-[1rem] leading-tight tracking-[-0.035em] text-[color:var(--foreground)] md:text-[1.28rem] lg:text-[1.18rem] xl:text-[1.28rem]">
                    {album.title}
                  </h3>
                  <p className="mt-1.5 text-[0.72rem] leading-5 text-[color:var(--muted)] md:text-[0.84rem] md:leading-6 lg:text-[0.78rem] xl:text-[0.84rem]">
                    {album.caption}
                  </p>
                </div>

                {album.images.length > 1 ? (
                  <div className="mt-3 flex gap-1.5 md:mt-4 md:gap-2" aria-label={`${album.title} images`}>
                    {album.images.map((image, imageIndex) => {
                      const isActive = imageIndex === activeIndex;

                      return (
                        <button
                          key={image.src ?? `${album.title}-${imageIndex}`}
                          type="button"
                          aria-label={`Show ${image.alt}`}
                          aria-pressed={isActive}
                          onClick={() => {
                            if (isActive) {
                              return;
                            }

                            setAlbumImage(
                              albumIndex,
                              imageIndex,
                              imageIndex > activeIndex ? "next" : "previous",
                            );
                          }}
                          className={`focus-ring h-2 rounded-full transition md:h-2.5 ${
                            isActive
                              ? "w-6 bg-[color:var(--accent-strong)] md:w-8"
                              : "w-2 bg-[color:var(--border-strong)]/45 hover:bg-[color:var(--accent-strong)]/60 md:w-2.5"
                          }`}
                        />
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
