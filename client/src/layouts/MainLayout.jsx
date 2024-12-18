import Header from "@/components/header/Header";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
const MainLayout = () => {
  const { loading, userValidate, isAuthenticated } = useAuth(); // Fetch values from the hook

  useEffect(() => {
    userValidate(); // Trigger user validation on component mount
  }, [userValidate]);

  // if (loading) {
  //   return <h2>Loading...</h2>; // Show loader when authentication is being checked
  // }

  // console.log("Main layout===>", { isAuthenticated });
  // if (loading) {
  //   console.log({ loading });
  //   return (
  //     <>
  //       <h2>Loading..</h2>
  //     </>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return <Navigate to="/auth/login" />;
  // }
  return (
    <div className="flex flex-col items-center justify-center">
      {isAuthenticated ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </div>
  );
};

export default MainLayout;
