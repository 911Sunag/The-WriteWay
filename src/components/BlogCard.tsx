import { Calendar, Share2Icon } from "lucide-react";


const BlogCard = () => {
  return (
    <section className="bg-blue-100 w-72 p-4 rounded-xl outline-pink-300 outline-2 space-y-4">
        <div>
          <img src="src\assets\images\nikldn-t-6GW8T6Jsc-unsplash.jpg" alt="boat" className="rounded-lg h-50 w-full"/>
        </div>
        <h3 className="font-calheading">Finding Direction in Open Waters</h3>
        <span className="flex items-center justify-center py-1 px-1 bg-black/25 w-20 rounded-md text-[10px] gap-1 font-semibold"><Calendar size={10}/>11-12-2025</span>
        <p className="font-nunpara font-semibold">
          When everything feels uncertain, even drifting can become a form of
          movement forward.
        </p>
        <div className="flex items-center justify-between">
          <button className="text-[12px] font-extrabold font-nunpara hover:cursor-pointer hover:text-blue-600 py-2">Read Full Blog</button>
          <Share2Icon size={14} className="hover:text-pink-600 hover:cursor-pointer"/>
        </div>
      </section>
  )
}

export default BlogCard