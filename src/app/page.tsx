"use client"

import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter()
  const handleNavigation = ()=>{
    router.push("/dashboard")
  }
  return (
    <div className=" flex justify-center flex-col items-center min-h-screen">
      <div>
   
      <h1 className="text-4xl  ">Welcome to Next js Home Page</h1>
      </div>
 <div>
       <button onClick={handleNavigation} className="p-2 bg-red-500 rounded-2xl">
       Dashboard
      </button>
 </div>
    </div>
  );
};

export default HomePage;
