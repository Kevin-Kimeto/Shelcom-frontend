import { useEffect, useState } from 'react';
import { getServices } from '../api/api';

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <div className="bg-slate-900 text-white max-w-screen mx-auto px-4 py-16 z-0">
      <h2 className="text-3xl font-bold mb-10">Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s._id} className="p-6 rounded shadow bg-white dark:bg-slate-800">
            <h3 className="font-semibold text-lg mb-2">{s.name}</h3>
            <p className="text-sm opacity-80 z-0">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
