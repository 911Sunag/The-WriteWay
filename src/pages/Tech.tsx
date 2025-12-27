import React from 'react'
import BlogCard from '@/components/BlogCard'
import { usePosts } from '@/hooks/usePosts'
import { Spinner } from '@/components/ui/spinner'

const Tech = () => {
  const { posts, loading, error } = usePosts(4)
  if (loading) return <div className="px-5 flex items-center justify-center"><Spinner className="size-15 text-pink-500"/></div>;
  if (error) return <div className="px-5">Error: {error}</div>;

  return (
    <div className="px-5 flex flex-wrap justify-between gap-6">
      {posts.map((p) => (
        <BlogCard key={p.id} id={p.id} title={p.title} date={p.date} excerpt={p.excerpt} imageUrl={p.imageUrl} />
      ))}
    </div>
  )
}

export default Tech