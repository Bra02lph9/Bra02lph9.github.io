import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function HighlightCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index + 1}
      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-300/20 text-cyan-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
    </motion.div>
  );
}
