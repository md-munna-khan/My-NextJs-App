import React from 'react';

const DynamicBlogPage =async ({params}:{params: Promise<{blogId: string }>}) => {
   const {blogId} = await params;
    return (
        <div>
            <h1>Dynamic blog page blogId:{blogId}</h1>
        </div>
    );
};

export default DynamicBlogPage;