import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp } from "../../utils/animations";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index + 1}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className="h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-5 w-5 text-slate-400 transition group-hover:text-cyan-300" />
          </a>
        </div>

        <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
