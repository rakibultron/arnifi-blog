import { useRoutes } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/auth/login/Login";
import Home from "@/pages/home/Home";
import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/about/About";
import Register from "@/pages/auth/register/Register";

const AppRouter = () => {
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
  ]);
};

export default AppRouter;
