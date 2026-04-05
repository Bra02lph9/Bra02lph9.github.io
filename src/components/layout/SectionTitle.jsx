export default function SectionTitle({ label, title }) {
  return (
    <div className="mb-8">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-bold">{title}</h2>
    </div>
  );
}
