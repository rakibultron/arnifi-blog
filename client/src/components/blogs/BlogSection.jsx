import BlogItem from "./BlogItem";
import { useEffect } from "react";
import axios from "@/lib/axiosInstance";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";

console.log(import.meta.env.VITE_APP_BACKEND_API_BASE);
import blogStore from "@/store/blogStore";
export default function BlogSection() {
  const { getBlogs, blogs } = blogStore();

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="min-h-screen  p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs
          ? blogs?.slice(0, 8)?.map((post) => (
              <BlogItem
                key={post._id}
                id={post._id}
                title={post.title}
                imageUrl={post.imageUrl}
                content={post.content}
                category={post.category}
                authorName={post.author}
                // authorImg={post.authorImg}
                // authorPosition={post.authorPosition}
                // authorBio={post.authorBio}
              />
            ))
          : null}
      </div>
    </div>
  );
}
