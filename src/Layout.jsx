import React from "react";
import { useState,useEffect } from "react";


import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogoLoader from "./components/LogoLoader";

function Layout(){
  const [loading, setLoading] = useState(() => {
    const shown = sessionStorage.getItem('loaderShown');
    return shown ? false : true;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('loaderShown', 'true');
      }, 2500); // adjust delay as needed
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) return <LogoLoader />;
    return (
        <>
       
       <Navbar/>
         <Outlet />
      <Footer/>
        </>
    )
}

export default Layout;

