'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  function cn(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
  }

  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== '/' && pathname.startsWith(href));
  
  return (
    <div>
      <Link 
      href={href}
      className={cn(
        'transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500',
        className, isActive ? 'text-rose-500' : ''
      )}
      >
      {children}
      </Link>
    </div>
  )
}

export default NavLink
