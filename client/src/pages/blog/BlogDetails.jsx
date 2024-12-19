import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "@/lib/axiosInstance";

const BlogDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  const { id } = params;

  const getBlogDetails = async () => {
    try {
      const res = await axios.get(`/blogs/${id}`);
      if (res.status === 404) {
        navigate("/not-found");
      } else {
        setBlog(res.data.blog);
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
      navigate("/not-found");
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, []);

  if (!blog) {
    return <div className="text-center p-8">Loading...</div>;
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString();
  const blogImage = blog.image ? blog.image : "/placeholder.jpg";

  return (
    <div className="w-[80%] mx-auto p-8">
      <Card className="rounded-lg overflow-hidden w-full border-0 shadow-none">
        <CardHeader className="h-96 relative overflow-hidden">
          <img
            src={blogImage}
            alt={blog.title}
            className="object-cover w-full h-full rounded-lg"
          />
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border mr-4">
                <img
                  src={"/placeholder.jpg"}
                  alt={blog.userId.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  {blog.userId.name}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {formattedDate}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <Badge className="mr-2 text-sm dark:bg-primary dark:text-black">
                {blog.category}
              </Badge>
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              <p className="mb-4">{blog.content}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogDetailsPage;
