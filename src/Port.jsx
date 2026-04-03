import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Brain,
  Sparkles,
  Dna,
  Stethoscope,
  BarChart3,
  Server,
} from "lucide-react";
import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiNeo4J,
  SiPandas,
  SiMysql,
  SiExpress,
  SiOpencv,
  SiR,
  SiBiolink,
} from "react-icons/si";

import bg from "../public/bg.png";

// project images bg
import dnaProjectImg from "../public/dna-project.png";
import geoProjectImg from "../public/geo-project.png";
import cleanTrackImg from "../public/clean-track.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const skills = [
  { name: "Python", icon: FaPython },
  { name: "R", icon: SiR },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Flask", icon: SiFlask },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Pandas", icon: SiPandas },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Neo4j", icon: SiNeo4J },
  { name: "SQL", icon: SiMysql },
  { name: "Git", icon: FaGitAlt },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Biopython", icon: SiBiolink },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const projects = [
  {
    title: "DNA Analysis Platform",
    description:
      "A bioinformatics web application dedicated to DNA sequence analysis, including ORF detection, promoter prediction, rho-independent terminators, and Shine-Dalgarno sequence identification while respecting biological context.",
    stack: ["React", "Flask", "Biopython", "Redis", "Cerely", "Numba", "MongoDB", "Cython"],
    link: "https://github.com/Bra02lph9/DNA_APP.git",
    image: dnaProjectImg,
  },
  {
    title: "GeoLocalisation & Route Optimization App",
    description:
      "A geolocation application designed to locate points of interest, display positions on an interactive map, and generate routes between different locations with route calculation.",
    stack: ["React", "Leaflet", "Neo4j", "OpenStreetMap", "Flask", "Pyhton", "Geolocation"],
    link: "https://github.com/Bra02lph9/NearMe.git",
    image: geoProjectImg,
  },
  {
    title: "Clean-Track Task Manager",
    description:
      "A team management and tracking application featuring a modern dashboard, task management, operational statistics, and a full-stack architecture.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://github.com/Bra02lph9/Task_Manager.git",
    image: cleanTrackImg,
  },
];

const services = [
  {
    title: "Web Application Development",
    description:
      "Building modern, smooth, and responsive interfaces with React, connected to solid backend systems.",
    icon: Server,
  },
  {
    title: "Bioinformatics & DNA Analysis",
    description:
      "Developing tools for biological sequence analysis, motif identification, and biologically oriented interpretation.",
    icon: Dna,
  },
  {
    title: "Data Science & Artificial Intelligence",
    description:
      "Data analysis, modeling, and the use of AI for real-world challenges in healthcare and precision medicine.",
    icon: Brain,
  },
];

const highlights = [
  {
    title: "Bioinformatics",
    description:
      "Sequence analysis, biological signals, and detection logic guided by molecular context.",
    icon: Dna,
  },
  {
    title: "AI in Healthcare",
    description:
      "Using artificial intelligence to support analysis and decision-making in precision medicine.",
    icon: Stethoscope,
  },
  {
    title: "Data & Visualization",
    description:
      "Transforming complex data into clear, useful, and actionable results.",
    icon: BarChart3,
  },
];

export default function PortfolioPremium() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">IBRAHIM RMILI</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#services" className="transition hover:text-cyan-300">Domains</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
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

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
                <div className="mx-auto h-56 w-56 overflow-hidden rounded-[2rem] border border-white/10 p-1 shadow-xl">
                  <img
                    src={bg}
                    alt="Ibrahim Rmili"
                    className="h-full w-full object-cover object-[center_20%] scale-125"
                  />
                </div>

                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-bold">Ibrahim Rmili</h2>
                  <p className="mt-2 text-slate-300">
                    Bioinformatics • AI in Healthcare • Full-Stack Developer
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-cyan-300">14+</p>
                    <p className="text-xs text-slate-400">Technologies</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-cyan-300">4+</p>
                    <p className="text-xs text-slate-400">Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-cyan-300">AI</p>
                    <p className="text-xs text-slate-400">Health & DNA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

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
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
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
          })}
        </section>

        <section id="skills" className="mt-24">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
            <h2 className="mt-3 text-3xl font-bold">Technologies and Tools</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
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
            })}
          </div>
        </section>

        <section id="services" className="mt-24">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Domains</p>
            <h2 className="mt-3 text-3xl font-bold">What I Can Build</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
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
            })}
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
              <h2 className="mt-3 text-3xl font-bold">Recent Projects</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
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
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-fuchsia-400/10" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>

              <h2 className="mt-3 text-3xl font-bold">
                Ready to collaborate on innovative projects
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
                I am interested in projects related to bioinformatics, artificial intelligence,
                data analysis, and the development of useful healthcare applications. For a
                collaboration, internship, research project, or professional opportunity,
                feel free to contact me directly.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/Bra02lph9"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ibrahim-rmili-5a2135280"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:brahimremili041@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
