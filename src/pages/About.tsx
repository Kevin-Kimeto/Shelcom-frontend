export default function About() {
  return (
    <div className="<Container> px-4 py-16">
      <h2 className="text-3xl font-bold mb-10">About Us</h2>
      <div className="grid sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 rounded shadow bg-white dark:bg-slate-800">
          <p className="text-4xl font-bold text-[color:var(--color-secondary)]">15+</p>
          <p>Years Experience</p>
        </div>
        <div className="p-6 rounded shadow bg-white dark:bg-slate-800">
          <p className="text-4xl font-bold text-[color:var(--color-secondary)]">120+</p>
          <p>Projects</p>
        </div>
        <div className="p-6 rounded shadow bg-white dark:bg-slate-800">
          <p className="text-4xl font-bold text-[color:var(--color-secondary)]">30+</p>
          <p>Engineers</p>
        </div>
      </div>
    </div>
  );
}
