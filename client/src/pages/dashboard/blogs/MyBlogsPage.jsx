// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { useState } from "react";
// import { Eye, EditIcon, Trash } from "lucide-react";
// import blogStore from "@/store/blogStore";
// import { useEffect } from "react";

// const MyBlogsPage = () => {
//   // const handleEdit = (id) => {
//   //   console.log(`Editing blog with id: ${id}`);
//   // };

//   // const handleDelete = (id) => {
//   //   setBlogsList(blogsList.filter((blog) => blog.id !== id));
//   // };

//   const { myBlogs, blogs } = blogStore();

//   useEffect(() => {
//     myBlogs();
//   }, []);

//   console.log({ blogs });

//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your recent blogs.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Title</TableHead>
//             <TableHead>Category</TableHead>
//             <TableHead>Created</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {blogs?.map((blog) => (
//             <TableRow key={blog.id}>
//               <TableCell className="font-medium">{blog.title}</TableCell>
//               <TableCell>{blog.category}</TableCell>
//               <TableCell>
//                 {new Date(blog.createdAt).toLocaleDateString()}
//               </TableCell>
//               <TableCell className="flex space-x-2">
//                 <button onClick={() => handleEdit(blog.id)} className="">
//                   <Eye className="w-5 h-5" />
//                 </button>
//                 <button onClick={() => handleEdit(blog.id)} className="">
//                   <EditIcon className="w-5 h-5" />
//                 </button>
//                 <button onClick={() => handleDelete(blog.id)} className="">
//                   <Trash className="w-5 h-5" />
//                 </button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell colSpan={3}>Total Blogs</TableCell>
//             <TableCell className="text-right">{blogs.length}</TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </div>
//   );
// };

// export default MyBlogsPage;

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

const MyBlogsPage = () => {
  const { myBlogs, blogs, deleteBlog } = blogStore();

  useEffect(() => {
    myBlogs();
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    // Replace this with your delete logic
    console.log(`Deleting blog with id: ${id}`);
    // setBlogToDelete(null);
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
                <button onClick={() => console.log(`Viewing blog: ${blog.id}`)}>
                  <Eye className="w-5 h-5" />
                </button>
                <button onClick={() => console.log(`Editing blog: ${blog.id}`)}>
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
