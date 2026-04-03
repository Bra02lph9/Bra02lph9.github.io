import { motion } from "framer-motion";
import {Github,Linkedin,Mail,ExternalLink,Download,Brain,Database,Sparkles,Dna,Stethoscope,BarChart3,Server} from "lucide-react";
import {FaReact,FaPython,FaJsSquare,FaGitAlt,FaGithub,FaNodeJs} from "react-icons/fa";
import {SiTailwindcss,SiFlask,SiMongodb,SiNeo4J,SiPandas,SiMysql,SiExpress,SiOpencv,SiR,SiBiolink} from "react-icons/si";
import bg from "../public/bg.png"


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
      "Application web bioinformatique dédiée à l’analyse de séquences ADN avec détection d’ORF, promoteurs, terminateurs rho-indépendants et séquences Shine-Dalgarno, en respectant le contexte biologique.",
    stack: ["React", "Flask", "Biopython", "Redis","Cerely","Numba","MongoDB","Cython"],
    link: "https://github.com/Bra02lph9/DNA_APP.git"
  },
 {
  title: "GeoLocalisation & Route Optimization App",
  description:
    "Application de géolocalisation permettant de localiser des points d’intérêt, visualiser des positions sur une carte interactive et tracer des itinéraires entre différents emplacements avec calcul de route.",
  stack: ["React", "Leaflet", "Neo4j", "OpenStreetMap", "Flask", "Pyhton", "Geolocation"],
  link:"https://github.com/Bra02lph9/NearMe.git"
},
  {
    title: "Clean-Track Task Manager",
    description:
      "Application de gestion et de suivi d’équipe avec tableau de bord moderne, gestion des tâches, statistiques opérationnelles et architecture full-stack.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    link:"https://github.com/Bra02lph9/Task_Manager.git"
  },
];

const services = [
  {
    title: "Développement d'applications web",
    description:
      "Création d’interfaces modernes, fluides et responsives avec React, intégrées à des backends solides.",
    icon: Server,
  },
  {
    title: "Bioinformatique & analyse ADN",
    description:
      "Développement d’outils pour l’analyse de séquences biologiques, l’identification de motifs et l’interprétation orientée contexte biologique.",
    icon: Dna,
  },
  {
    title: "Data science & intelligence artificielle",
    description:
      "Analyse de données, modélisation et exploitation de l’IA pour des problématiques réelles en santé et médecine de précision.",
    icon: Brain,
  },
];

const highlights = [
  {
    title: "Bioinformatique",
    description: "Analyse de séquences, signaux biologiques et logique de détection orientée contexte moléculaire.",
    icon: Dna,
  },
  {
    title: "IA en santé",
    description: "Utilisation de l’intelligence artificielle pour soutenir l’analyse et la décision en médecine de précision.",
    icon: Stethoscope,
  },
  {
    title: "Data & visualisation",
    description: "Transformation des données complexes en résultats clairs, utiles et exploitables.",
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
            <a href="#about" className="transition hover:text-cyan-300">À propos</a>
            <a href="#skills" className="transition hover:text-cyan-300">Compétences</a>
            <a href="#services" className="transition hover:text-cyan-300">Domaines</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projets</a>
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
              Je conçois des solutions
              <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                {" "}intelligentes
              </span>
              <br />
              pour la bioinformatique et la médecine de précision.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Je suis passionné par l’analyse de données, la bioinformatique, l’intelligence
              artificielle appliquée à la santé et le développement d’applications web modernes.
              Mon objectif est de construire des outils utiles, robustes et élégants capables de
              transformer des données complexes en résultats exploitables.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
              >
                Me contacter
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Télécharger CV
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
  className="w-full h-full object-cover object-[center_20%] scale-125"
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
                    <p className="text-xs text-slate-400">Projets</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-cyan-300">AI</p>
                    <p className="text-xs text-slate-400">Santé & ADN</p>
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
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">À propos</p>
            <h2 className="mt-4 text-3xl font-bold">Un profil à l’intersection du code, des données et de la santé</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Mon intérêt principal se situe dans l’analyse de données, la bioinformatique et
              l’intelligence artificielle appliquée à la médecine de précision. J’aime concevoir
              des applications capables de relier logique algorithmique, compréhension biologique
              et expérience utilisateur moderne.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Vision</p>
            <h3 className="mt-4 text-2xl font-bold">Construire des outils utiles pour des problèmes réels</h3>
            <p className="mt-5 leading-8 text-slate-300">
              Je m’intéresse particulièrement aux solutions capables d’exploiter les données
              biologiques et médicales pour produire des analyses plus précises, plus lisibles
              et plus pertinentes pour la recherche et l’innovation en santé.
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
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Compétences</p>
            <h2 className="mt-3 text-3xl font-bold">Technologies et outils</h2>
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
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Domaines</p>
            <h2 className="mt-3 text-3xl font-bold">Ce que je peux développer</h2>
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
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projets</p>
              <h2 className="mt-3 text-3xl font-bold">Les projets recents</h2>
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
                <div className="h-52 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.3),transparent_30%),linear-gradient(135deg,#0f172a,#020617)]" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                     <a href={project.link}><ExternalLink className="h-5 w-5 text-slate-400 transition group-hover:text-cyan-300" /></a>
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
                Prêt à collaborer sur des projets innovants
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
                Je m’intéresse aux projets liés à la bioinformatique, à l’intelligence artificielle,
                à l’analyse de données et au développement d’applications utiles pour la santé.
                Pour une collaboration, un stage, un projet de recherche ou une opportunité
                professionnelle, vous pouvez me contacter directement.
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