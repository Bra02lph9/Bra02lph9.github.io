export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
}
