import { blogs } from "../../app/data/blogs";
import BlogCard from "./BlogCard";

export default function BlogsModal({ onClose }: any) {
  return (
    <div className="fixed  inset-0 bg-black/60 z-50 flex justify-center items-center  ">
      <div className="bg-white max-w-6xl w-full p-8 rounded-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4">✕</button>

        <h2 className="text-2xl font-bold mb-6">All Blogs</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
