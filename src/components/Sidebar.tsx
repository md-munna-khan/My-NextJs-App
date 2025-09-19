import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='flex flex-col p-4 bg-amber-400 space-x-6'>
            <Link href='/'>Home</Link>
            <Link href='/settings'>Settings</Link>
            <Link href='/profile'>Profile</Link>
            <Link href='/counter'>Counter</Link>
        </div>
    );
};

export default Sidebar;