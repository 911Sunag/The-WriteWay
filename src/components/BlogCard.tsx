import { Calendar, Share2Icon } from "lucide-react";
import React from "react";

type BlogCardProps = {
  id?: number | string;
  title?: string;
  date?: string;
  excerpt?: string;
  imageUrl?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title = "Untitled",
  date = new Date().toLocaleDateString(),
  excerpt = "No description available.",
  imageUrl,
}) => {
  const img = imageUrl ?? `https://picsum.photos/seed/${id ?? "default"}/600/400`;

  return (
    <section className="bg-blue-100 w-72 p-4 rounded-xl outline-pink-300 outline-2 space-y-4">
      <div>
        <img src={img} alt={title} className="rounded-lg h-50 w-full object-cover" />
      </div>
      <h3 className="font-calheading">{title}</h3>
      <span className="flex items-center justify-center py-1 px-1 bg-black/25 w-20 rounded-md text-[10px] gap-1 font-semibold"><Calendar size={10} />{date}</span>
      <p className="font-nunpara font-semibold">{excerpt}</p>
      <div className="flex items-center justify-between">
        <button className="text-[12px] font-extrabold font-nunpara hover:cursor-pointer hover:text-blue-600 py-2">Read Full Blog</button>
        <Share2Icon size={14} className="hover:text-pink-600 hover:cursor-pointer" />
      </div>
    </section>
  );
};

export default BlogCard