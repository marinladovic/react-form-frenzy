import Navbar from "@/layout/Navbar/Navbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootModule = () => {
  return (
    <div className="max-h-screen overflow-hidden pb-8">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-[90%] mx-auto px-4 py-8">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default RootModule;
