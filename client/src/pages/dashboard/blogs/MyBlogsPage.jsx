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

import { useState } from "react";
import { Eye, EditIcon, Trash } from "lucide-react";
const blogs = [
  { id: 1, title: "Blog 1", author: "John Doe", createdAt: "2024-12-15" },
  { id: 2, title: "Blog 2", author: "Jane Smith", createdAt: "2024-12-16" },
  { id: 3, title: "Blog 3", author: "Alice Johnson", createdAt: "2024-12-17" },
  { id: 4, title: "Blog 4", author: "Bob Brown", createdAt: "2024-12-18" },
];

const MyBlogsPage = () => {
  const [blogsList, setBlogsList] = useState(blogs);

  const handleEdit = (id) => {
    console.log(`Editing blog with id: ${id}`);
  };

  const handleDelete = (id) => {
    setBlogsList(blogsList.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent blogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogsList.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="font-medium">{blog.title}</TableCell>
              <TableCell>{blog.author}</TableCell>
              <TableCell>
                {new Date(blog.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="flex space-x-2">
                <button onClick={() => handleEdit(blog.id)} className="">
                  <Eye className="w-5 h-5" />
                </button>
                <button onClick={() => handleEdit(blog.id)} className="">
                  <EditIcon className="w-5 h-5" />
                </button>
                <button onClick={() => handleDelete(blog.id)} className="">
                  <Trash className="w-5 h-5" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Blogs</TableCell>
            <TableCell className="text-right">{blogsList.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default MyBlogsPage;
