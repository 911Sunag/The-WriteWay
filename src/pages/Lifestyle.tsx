// import { Link } from "react-router-dom";

import BlogCard from "@/components/BlogCard";
import { Spinner } from "@/components/ui/spinner";
import { usePosts } from "@/hooks/usePosts";

const Lifestyle = () => {
  const { posts, loading, error } = usePosts(8);

  if (loading) return <div className="px-5 flex items-center justify-center"><Spinner className="size-15 text-pink-500"/></div>;
  if (error) return <div className="px-5">Error: {error}</div>;

  return (
    <div className="px-5 flex flex-wrap justify-between gap-6">
      {posts.map((p) => (
        <BlogCard key={p.id} id={p.id} title={p.title} date={p.date} excerpt={p.excerpt} imageUrl={p.imageUrl} />
      ))}
    </div>
  );
};

export default Lifestyle;
