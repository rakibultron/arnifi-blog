import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { Eye, EditIcon, Trash } from "lucide-react";
import blogStore from "@/store/blogStore";
import { useNavigate } from "react-router-dom";

const MyBlogsPage = () => {
  const navigate = useNavigate();
  const { myBlogs, clearBlogsStore, blogs, deleteBlog } = blogStore();

  useEffect(() => {
    myBlogs();

    return () => {
      clearBlogsStore();
    };
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent blogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs?.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="font-medium">{blog.title}</TableCell>
              <TableCell>{blog.category}</TableCell>
              <TableCell>
                {new Date(blog.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="flex space-x-2">
                <button onClick={() => navigate(`/blogs/${blog._id}`)}>
                  <Eye className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    navigate(`/dashboard/blogs/update/${blog._id}`)
                  }
                >
                  <EditIcon className="w-5 h-5" />
                </button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button>
                      <Trash className="w-5 h-5" />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this blog? This action
                        cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(blog._id)}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Blogs</TableCell>
            <TableCell className="text-right">{blogs.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default MyBlogsPage;
