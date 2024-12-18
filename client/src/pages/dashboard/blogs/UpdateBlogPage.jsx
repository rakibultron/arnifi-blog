import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "@/lib/axiosInstance";

const UpdateBlogPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { id } = params;

  // Fetch blog details
  const getBlogDetails = async () => {
    try {
      const res = await axios.get(`/blogs/${id}`);
      if (res.status === 404) {
        navigate("/not-found");
      } else {
        const blogData = res.data.blog;
        setBlog(blogData);
        setValue("title", blogData.title);
        setValue("author", blogData.author);
        setValue("content", blogData.content);
        setSelectedCategory(blogData.category);
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
      navigate("/not-found");
    }
  };

  // Update blog details
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.put(`/blogs/${id}`, data);
      setLoading(false);
      alert("Blog updated successfully!");
      navigate(`/blogs/${id}`);
    } catch (error) {
      console.error("Error updating blog:", error);
      setLoading(false);
      alert("Failed to update blog.");
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, []);

  if (!blog) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return (
    <Card className="mx-auto max-w-2xl w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Update Blog</CardTitle>
        <CardDescription>Modify your blog details below</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title Field */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Blog title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Category Field */}
          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value);
                setValue("category", value);
              }}
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
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Author Field */}
          <div>
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              type="text"
              placeholder="Author's name"
              {...register("author", { required: "Author is required" })}
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

          {/* Content Field */}
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write your blog content here"
              rows={5}
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Updating..." : "Update Blog"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdateBlogPage;
