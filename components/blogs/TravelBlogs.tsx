"use client";

import { useRouter } from "next/navigation";
import { blogs } from "../../app/data/blogs";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TravelBlogsProps = {
  showViewAll?: boolean;
};

export default function TravelBlogs({
  showViewAll = true,
}: TravelBlogsProps) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const cardWidth = 300;
  const gap = 24;
  const slideBy = cardWidth + gap;

  const originalLength = blogs.length;
  const loopedBlogs = [...blogs, ...blogs]; // duplicate

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🔥 RESET LOGIC (no blank screen)
  useEffect(() => {
    if (index === originalLength) {
      // animation ke baad jump back
      setTimeout(() => {
        setIsResetting(true);
        setIndex(0);
      }, 900); // animation duration ke barabar
    }
  }, [index, originalLength]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mt-30 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Travel Blogs</h2>

        {showViewAll && (
          <button
            onClick={() => router.push("/blogs")}
            className="text-green-600 font-semibold"
          >
            See All Blogs →
          </button>
        )}
      </div>

      {/* SLIDER */}
      <motion.div
        className="flex gap-6"
        animate={{ x: -(index * slideBy) }}
        transition={
          isResetting
            ? { duration: 0 } // 👈 instant jump
            : { duration: 0.9, ease: "easeInOut" }
        }
        onAnimationComplete={() => setIsResetting(false)}
        style={{ width: "max-content" }}
      >
        {loopedBlogs.map((blog, i) => (
          <div key={`${blog.slug}-${i}`} style={{ width: cardWidth }}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
