import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index + 1}
      className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/10"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-3xl text-cyan-300 transition group-hover:scale-110">
        <Icon />
      </div>
      <h3 className="font-semibold text-white">{skill.name}</h3>
    </motion.div>
  );
}
