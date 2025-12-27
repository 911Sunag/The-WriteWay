import { useEffect, useState } from "react";

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  imageUrl: string;
  date: string;
};

export function usePosts(limit = 4) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)


      .then((r) => {
        if (!r.ok) throw new Error("Network response was not ok");
        return r.json();
      })


      .then((data: any[]) => {
        const mapped: Post[] = data.map((p) => ({
          id: p.id,
          title: p.title,
          excerpt: (p.body || "").slice(0, 120) + ((p.body || "").length > 120 ? "..." : ""),
          body: p.body,
          imageUrl: `https://picsum.photos/seed/${p.id}/600/400`,
          date: new Date(Date.now() - p.id * 24 * 60 * 60 * 1000).toLocaleDateString(),
        }));
        setPosts(mapped);


      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

      
  }, [limit]);

  return { posts, loading, error };
}
