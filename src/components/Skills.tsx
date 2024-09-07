import skills from "../data/skills";
import Marquee from "./Marquee";
import style from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <Marquee
        shuffleItems={true}
        items={skills} />
      <Marquee
        reverse={true}
        shuffleItems={true}
        items={skills} />

      <div className="visually-hidden">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.label}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
