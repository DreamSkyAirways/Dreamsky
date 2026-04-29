import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: any) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="block group">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 ">
        
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col h-full">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-[#0D6269] transition">
            {blog.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {blog.excerpt}
          </p>

          {/* Read more */}
          <div className="mt-auto flex justify-end">
            <span className="flex items-center gap-1 text-sm font-semibold text-[#0D6269] group-hover:gap-2 transition-all">
              Read more
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
