import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index + 1}
      className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-300/20 text-cyan-300">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
    </motion.div>
  );
}
