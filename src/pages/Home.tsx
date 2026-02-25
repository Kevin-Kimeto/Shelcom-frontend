export default function Home() {
  return (
    <section className="bg-linear-to-r from-primary to-gray-900 text-white">
      <div className="<Container> py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="px-6 text-4xl md:text-5xl font-bold leading-tight">
            Building Kenya’s Future <br />
            <span className="text-secondary">With Precision & Trust</span>
          </h1>

          <p className="mt-6 px-6 text-lg text-gray-300">
            Shelcom Designs is a professional construction company delivering
            residential, commercial, and civil projects across Kenya.
          </p>

          <div className="mt-8 px-6 flex gap-4">
            <a
              href="/contact"
              className="bg-secondary px-6 py-3 rounded text-white font-semibold hover:bg-amber-800"
            >
              Get a Quote
            </a>
            <a
              href="/projects"
              className="border border-gray-400 px-6 py-3 rounded hover:bg-white hover:text-black"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
