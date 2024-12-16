import Home from "@/pages/home/Home";
import { useRoutes } from "react-router-dom";

const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
};

export default AppRouter;
