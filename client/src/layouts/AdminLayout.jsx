import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
