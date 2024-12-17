import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b shadow-sm bg-white px-6">
      <div className="container flex items-center justify-between py-4">
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-4">
          <span className="text-lg font-bold">Arnifi Blog</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors"
            )}
          >
            Home
          </a>
          <a
            href="#"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors"
            )}
          >
            About
          </a>
          <a
            href="#"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors"
            )}
          >
            Blogs
          </a>
          <a
            href="#"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors"
            )}
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
