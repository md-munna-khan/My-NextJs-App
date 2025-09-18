import React from 'react';

const CatchAllRoutes =async ({params}:{params:Promise<{slug:string[]}>}) => {
   const {slug} = await params
    return (
        <div>
            <h1 className='text-4xl'> catch all routes :{slug}</h1>
        </div>
    );
};

export default CatchAllRoutes;