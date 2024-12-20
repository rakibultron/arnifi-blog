import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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
import { useState } from "react";

const UpdateBlogPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(""); // Controlled state for category

  const onSubmit = async (data) => {
    console.log({ data });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <Card className="mx-auto max-w-2xl w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Update Blog</CardTitle>
        <CardDescription>
          Update the details of your blog post below
        </CardDescription>
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
              value={selectedCategory} // Controlled value
              onValueChange={(value) => {
                setSelectedCategory(value); // Update local state
                setValue("category", value); // Update react-hook-form state
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

          {/* Image Upload Field */}
          <div>
            <Label htmlFor="image">Upload Image</Label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {image && (
              <p className="text-sm text-gray-500">Image: {image.name}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Update Blog
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdateBlogPage;
