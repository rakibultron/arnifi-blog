import { useRoutes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import AdminLayout from "./layouts/AdminLayout";
import ProfilePage from "./pages/dashboard/ProfilePage";
import BlogsPage from "./pages/blog/BlogsPage";
import BlogDetailsPage from "./pages/blog/BlogDetails";
import CreateBlogPage from "./pages/dashboard/blogs/CreateBlogPage";
import UpdateBlogPage from "./pages/dashboard/blogs/UpdateBlogPage";
import MyBlogsPage from "./pages/dashboard/blogs/MyBlogsPage";
import NotFountPage from "./pages/not-found/NotFountPage";
import ContactPage from "./pages/contact/ContactPage";

const MainComponent = () => {
  // Define routes for authenticated and unauthenticated users
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "blogs",
          element: <BlogsPage />,
        },
        {
          path: "blogs/:id",
          element: <BlogDetailsPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <MyBlogsPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },

        {
          path: "blogs/create",
          element: <CreateBlogPage />,
        },
        {
          path: "blogs/update/:id",
          element: <UpdateBlogPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFountPage />,
    },
  ]);
};

export default MainComponent;
