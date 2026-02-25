const API_BASE = import.meta.env.VITE_API_URL;

export async function getServices() {
  const res = await fetch(`${API_BASE}/services`);
  return res.json();
}

export async function getProjects() {
  const res = await fetch(`${API_BASE}/projects`);
  return res.json();
}
