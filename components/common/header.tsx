import NavLink from "@/components/common/nav-link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const isLoggedIn = false;

  return (
    <nav className="container flex items-center justify-between py-4 mx-auto lg:px-8 px-4">
      <NavLink href="/" className="flex items-center gap-2 text-lg font-extrabold lg:text-xl">
        <FileText className="w-6 h-6 text-gray-900 transition-transform duration-200 ease-in-out hover:rotate-12" />
        <span className="text-gray-900">SummaireAI</span>
      </NavLink>

      <div className="hidden lg:flex flex-1 justify-center gap-8">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Dashboard</NavLink>}
      </div>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <NavLink href="/upload">Upload A PDF</NavLink>
            <span className="px-3 py-1 text-sm font-semibold text-white bg-emerald-500 rounded-full">
              Pro
            </span>
            <Button>Profile</Button>
          </div>
        ) : (
            <NavLink href="/sign-in">
            <Button className="hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-600 hover:text-white transform transition-transform duration-200 hover:scale-110" variant="outline">Sign In</Button>
            </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
