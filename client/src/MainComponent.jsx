import { useRoutes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import AdminLayout from "./layouts/AdminLayout";
import ProfilePage from "./pages/dashboard/ProfilePage";

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
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
};

export default MainComponent;
