import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="min-h-[53vh] my-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
