import BlogItem from "@/components/blogs/BlogItem";

import { useEffect, useState } from "react";
import blogStore from "@/store/blogStore";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function BlogSection() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [author, setAuthor] = useState("");

  const { getBlogs, blogs } = blogStore();

  // Function to handle search and filters
  const manageSearch = () => {
    const filters = {};
    if (selectedCategory) {
      filters.category = selectedCategory;
    }
    if (author) {
      filters.author = author;
    }
    getBlogs(filters);
  };

  useEffect(() => {
    manageSearch();
  }, [selectedCategory, author, getBlogs]);

  // Handle category change
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setValue("category", value);
  };

  // Handle author search input change
  const handleAuthorSearch = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <div className="m-8 w-full">
        <div className="flex justify-center items-center w-full min-h-[200px]">
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl px-4">
            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
              <Label htmlFor="category" className="block mb-2">
                Category
              </Label>
              <Select
                value={selectedCategory}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Career">Career</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Travel">Travel</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
              <Label htmlFor="author" className="block mb-2">
                Author Name
              </Label>
              <Input
                id="author"
                type="text"
                placeholder="Search by Author Name"
                value={author}
                onChange={handleAuthorSearch}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs?.map((post) => (
            <BlogItem
              key={post._id}
              id={post._id}
              title={post.title}
              imageUrl={post.imageUrl}
              content={post.content}
              category={post.category}
              authorName={post.author}
            />
          ))}
        </div>
      </div>
    </>
  );
}
