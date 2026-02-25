import { useEffect, useState } from 'react';
import { getProjects } from '../api/api';

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="bg-slate-900 text-white max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p._id} className="rounded overflow-hidden shadow">
            <img src={p.imageURL} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
