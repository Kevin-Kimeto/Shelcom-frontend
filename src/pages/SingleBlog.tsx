import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../lib/api";
import posthog from "../lib/posthog";

export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      getBlog(slug).then((data) => {
        setBlog(data);

        posthog.capture("blog_opened", {
          slug: data.slug,
          title: data.title,
        });
      });
    }
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercent > 75) {
        posthog.capture("blog_read_75_percent", {
          slug: slug,
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  if (!blog) return <div className="p-20">Loading...</div>;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.metaTitle,
    description: blog.metaDescription,
    image: blog.image,
    author: {
      "@type": "Organization",
      name: "Shelcom Designs"
    },
    publisher: {
      "@type": "Organization",
      name: "Shelcom Designs"
    },
    datePublished: blog.createdAt
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        {blog.title}
      </h1>

      <img
        src={blog.image}
        className="rounded-xl mb-8 w-full h-auto object-cover"
      />

      <article className="prose dark:prose-invert max-w-none">
        {blog.content}
      </article>
    </div>
  );
}