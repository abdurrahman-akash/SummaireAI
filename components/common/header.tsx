import React from 'react'
import Link from 'next/link'
import NavLink from '@/components/common/nav-link'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
    const isLoggedIn = false;
  return (
    <nav className='container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto'>
        <div className='flex'>
        <NavLink href="/" className='flex items-center gap-1 lg:gap-2 text-lg lg:text-xl font-extrabold'>
            <FileText className='w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out' />
            <span className='font-extrabold text-lg lg:text-xl text-gray-900'>
                SummaireAI
            </span>
        </NavLink>
        </div>

        <div className='flex flex-1 justify-center lg:justify-center gap-4 lg:gap-12 lg:items-center'>
            <NavLink href="/#pricing">Pricing</NavLink>
            <NavLink href="/#features">Features</NavLink>
            {isLoggedIn && <NavLink href="/dashboard">Dashboard</NavLink>}
        </div>

        <div className='flex lg:justify-end gap-4 lg:gap-12 lg:items-center'>
            {isLoggedIn ? (
                <div className='flex gap-2 items-center'>
                    <NavLink href="/upload">Upload A PDF</NavLink>
                    <div>Pro</div>
                    <Button>User</Button>
                </div>
            ) : (
            <div>
                <NavLink href="/sign-in">Sign In</NavLink>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Header
