import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
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
  );
}
