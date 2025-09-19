import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-between px-6 py-3'>
            <div><Link href="/">Next js</Link></div>
          <div className="flex justify-center items-center p-4">
  <input 
    type="text" 
    placeholder="Search..." 
    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>

            <div className='flex  space-x-4'>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/dashboard'>Dashboard</Link>
                <Link href='/login'>Login</Link>
               
            </div>
        </div>
    );
};

export default Navbar;