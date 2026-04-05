import { skills } from "../../data/skills";
import SectionTitle from "../layout/SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-24">
      <SectionTitle label="Skills" title="Technologies and Tools" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
