import { motion } from "framer-motion";
import { Download, Linkedin, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { fadeUp } from "../../utils/animations";
import ProfileCard from "./ProfileCard";

export default function HeroSection() {
  return (
    <section id="home" className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          Bioinformatics • AI in Healthcare • Full-Stack Development
        </div>

        <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
          I design
          <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
            {" "}intelligent
          </span>
          <br />
          solutions for bioinformatics and precision medicine.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          I am passionate about data analysis, bioinformatics, artificial intelligence in healthcare,
          and modern web application development. My goal is to build useful, robust, and elegant
          tools capable of transforming complex data into actionable results.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
          >
            Contact Me
          </a>

          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 text-slate-300">
          <a
            href="https://github.com/Bra02lph9"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
          >
            <FaGithub className="h-5 w-5" /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ibrahim-rmili-5a2135280"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>

          <a
            href="mailto:brahimremili041@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5" /> Email
          </a>
        </div>
      </motion.div>

      <ProfileCard />
    </section>
  );
}
