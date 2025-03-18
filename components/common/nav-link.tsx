"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`text-sm transition-colors duration-200 ${
        isActive ? "text-blue-600 font-semibold" : "text-gray-600"
      } hover:text-blue-500 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
