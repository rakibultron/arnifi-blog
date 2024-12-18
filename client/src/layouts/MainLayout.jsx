import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

const MainLayout = () => {
  const { userValidate } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const data = userValidate();
    console.log({ data });
    if (!data) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <>
        <Header />
        <Outlet />
      </>
    </div>
  );
};

export default MainLayout;
