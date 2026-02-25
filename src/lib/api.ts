const API = import.meta.env.VITE_API_URL;

export const getBlogs = async () => {
  const res = await fetch(`${API}/blogs`);
  return res.json();
};

export const getBlog = async (slug: string) => {
  const res = await fetch(`${API}/blogs/${slug}`);
  return res.json();
};