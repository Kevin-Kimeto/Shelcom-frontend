import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../lib/api";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  image: string;
  metaDescription: string;
  createdAt: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10">
        Construction Insights
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((b) => (
          <Link
            key={b._id}
            to={`/blog/${b.slug}`}
            className="group border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={b.image}
              className="w-full h-52 object-cover group-hover:scale-105 transition"
            />

            <div className="p-5">
              <h2 className="font-semibold text-lg mb-2 group-hover:text-amber-600">
                {b.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                {b.metaDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}