import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { User, Sliders, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeModeToggle } from "../ThemeModeToggle";
import axios from "@/lib/axiosInstance";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
const Header = () => {
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
    <header className="w-full border-b shadow-sm px-6">
      <div className="container flex items-center justify-between py-4 mx-auto">
        <Button variant="outline" size="icon" className="md:hidden">
          <Sliders className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            <span className="text-lg font-bold">Arnifi Blog</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 mx-auto">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="focus:ring-0 dark:hover:bg-gray-700 hover:bg-gray-100"
              >
                <User className="h-5 w-5 text-gray-700 dark:text-white" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <Sliders className="h-4 w-4" />
                  Dashboard
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                asChild
                onClick={() => {
                  handleLogout();
                }}
              >
                <div className="flex items-center gap-2 p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <LogOut className="h-4 w-4" />
                  Logout
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
