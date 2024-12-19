import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b px-4 h-16">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <span className="font-bold text-lg">Admin Panel</span>
      </div>
      <div className="flex items-center gap-6">
        <User className="w-6 h-6 " />
        <ThemeModeToggle />
      </div>
    </nav>
  );
};

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        <SidebarInset className="flex-1">
          <header className="shrink-0 w-full">
            <Navbar />
          </header>

          <div className="flex-1 p-4">
            <main className="w-full">
              <Outlet />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
