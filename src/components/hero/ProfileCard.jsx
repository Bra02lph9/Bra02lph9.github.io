import { motion } from "framer-motion";
import bg from "../../assets/bg.png";
import { fadeUp } from "../../utils/animations";

export default function ProfileCard() {
  return (
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
  );
}
