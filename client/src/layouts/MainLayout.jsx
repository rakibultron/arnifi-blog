import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
