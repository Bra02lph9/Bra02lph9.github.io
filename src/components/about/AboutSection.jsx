import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { highlights } from "../../data/highlights";
import HighlightCard from "./HighlightCard";

export default function AboutSection() {
  return (
    <>
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        custom={1}
        className="mt-24 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</p>
          <h2 className="mt-4 text-3xl font-bold">
            A profile at the intersection of code, data, and healthcare
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            My main interests lie in data analysis, bioinformatics, and artificial intelligence
            applied to precision medicine. I enjoy designing applications that connect algorithmic
            logic, biological understanding, and modern user experience.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Vision</p>
          <h3 className="mt-4 text-2xl font-bold">
            Building useful tools for real-world problems
          </h3>
          <p className="mt-5 leading-8 text-slate-300">
            I am especially interested in solutions that can leverage biological and medical data
            to produce more precise, more readable, and more relevant analyses for research and
            healthcare innovation.
          </p>
        </div>
      </motion.section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <HighlightCard key={item.title} item={item} index={index} />
        ))}
      </section>
    </>
  );
}
