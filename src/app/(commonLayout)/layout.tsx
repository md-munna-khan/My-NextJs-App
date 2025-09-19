import Navbar from '@/components/Navbar';
import React from 'react';

const CommonLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
      <main> {children}</main>
               <footer className="text-4xl my-4 text-center">
        this is fokira footer
      </footer>
        </div>
    );
};

export default CommonLayout;