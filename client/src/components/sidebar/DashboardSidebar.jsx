import { Calendar, Home, Inbox, Search, LogOut, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { toast } from "react-toastify";
import axios from "@/lib/axiosInstance";

// Menu items
const items = [
  {
    title: "Home",
    url: "/",
    icon: Calendar,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Add Blogs",
    url: "/dashboard/blogs/create",
    icon: Inbox,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post("/auth/logout");

      if (res.status == 200) {
        console.log({ res });
        toast.success(res.data.message);
        localStorage.removeItem("token");
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Sidebar className="bg-white md:bg-black">
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Dashboard</SidebarGroupLabel> */}
          <SidebarHeader>Menus</SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} asChild>
                  <Link to="#">
                    <LogOut />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
