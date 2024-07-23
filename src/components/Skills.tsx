import skills from "../data/skills";
import Marquee from "./Marquee";

export default function Skills() {
  return (
    <section id="skills">
      <h2>What I Bring to the Table</h2>
      <Marquee
        shuffleItems={true}
        items={skills} />
      <Marquee
        reverse={true}
        shuffleItems={true}
        items={skills} />
    </section>
  )
}
