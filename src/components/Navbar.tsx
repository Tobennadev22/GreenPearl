import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, MessageSquare, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  openQuoteModal?: () => void;
}

const Navbar = ({ openQuoteModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const NavLinks = () => (
    <>
      <Link
        to="/"
        className={cn(
          "nav-item flex items-center",
          location.pathname === "/" && "active"
        )}
        onClick={() => setIsOpen(false)}
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      <Link
        to="/menu"
        className={cn("nav-item", location.pathname === "/menu" && "active")}
        onClick={() => setIsOpen(false)}
      >
        Menu
      </Link>
      <Link
        to="/about"
        className={cn("nav-item", location.pathname === "/about" && "active")}
        onClick={() => setIsOpen(false)}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className={cn("nav-item", location.pathname === "/contact" && "active")}
        onClick={() => setIsOpen(false)}
      >
        Contact Us
      </Link>
      {/* <button
        type="button"
        onClick={() => {
          openQuoteModal?.();
          setIsOpen(false);
        }}
        className="nav-item flex items-center"
        style={{
          outline: "none",
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        <MessageSquare className="w-4 h-4 mr-1" />
        Quote
      </button> */}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-black/90 shadow-sm dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-900 dark:border-gray-800"
          : "py-5 bg-black/50 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-lg tracking-tight text-white dark:text-white animate-fade-in"
        >
          Green Pearl
        </Link>

        <nav className="hidden md:flex space-x-6 animate-fade-in text-white dark:text-white font-medium">
          <NavLinks />
        </nav>

        <div className="block md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-white dark:text-white">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[240px] sm:w-[280px] flex flex-col"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
