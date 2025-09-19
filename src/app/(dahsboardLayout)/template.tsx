import Sidebar from '@/components/Sidebar';
import React from 'react';

const dashboardLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Sidebar/>
            {children}
        </div>
    );
};

export default dashboardLayout;