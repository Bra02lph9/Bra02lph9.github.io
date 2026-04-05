import { Sparkles } from "lucide-react";

export default function Header() {
  return (
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
  );
}
