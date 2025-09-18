import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-between px-6 py-3'>
            <div><Link href="/">Next js</Link></div>
            <div className='flex  space-x-4'>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;