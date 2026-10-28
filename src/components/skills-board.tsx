type Category = { readonly title: string; readonly sketch: keyof typeof sketches; readonly skills: readonly string[] };

const sketches = {
  cloud: <path d="M30 45h43a14 14 0 0 0 0-28 23 23 0 0 0-43 0 14 14 0 0 0 0 28Zm20 0v16m-26 0h52M24 61v12m26-12v12m26-12v12M17 73h14v12H17zm26 0h14v12H43zm26 0h14v12H69z" />,
  delivery: <path d="M14 35h18v18H14zm54 0h18v18H68zM32 44h36m-17-7 7 7-7 7M23 53v20h54V53M43 65l-8 8 8 8" />,
  code: <path d="m33 27-20 23 20 23m34-46 20 23-20 23M57 17 43 83" />,
  data: <path d="M18 74V51m21 23V35m22 39V45m21 29V20M12 84h76M18 33l21-15 22 10 21-18" />,
  web: <path d="M12 22h76v58H12zm0 14h76M21 29h1m7 0h1m7 0h1M22 46h25v24H22zm35 1h20M57 58h20m-20 11h13" />,
  design: <path d="m50 13 28 28-28 46-28-46Zm0 0v42m-28-14 28 14 28-14M16 87h68" />,
};

export function SkillsBoard({ categories }: { categories: readonly Category[] }) {
  return (
    <div className="skills-board">
      {categories.map((category, index) => (
        <article key={category.title} className={`skill-sheet gallery-card ${index < 2 ? "skill-sheet-featured" : ""}`}>
          <div className="skill-sheet-heading">
            <span className="skill-sheet-index" aria-hidden="true">0{index + 1}</span>
            <h3 className="card-title">{category.title}</h3>
          </div>
          <svg className="skill-sketch" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{sketches[category.sketch]}</svg>
          <ul className="skill-sheet-tools" aria-label={category.title}>
            {category.skills.map((skill, skillIndex) => (
              <li key={skill} className={skillIndex < 3 ? "skill-emphasis" : ""}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
