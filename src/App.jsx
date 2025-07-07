import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { Box } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  
  // smooth scrolling
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  // loading page
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

    // Scroll listener
    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

  if (loading) return <Loading />;

  return (
    <div>
      <Header scrollTo = {scrollToSection}/>
       {/* sections rendered one after another — true single‑page */}
       <Box id="home">
        <Home scrollY = {scrollY}/>
      </Box>

      <Box id="menu">
        <Menu scrollY = {scrollY}/>
      </Box>

      <Box id="contact">
        <Contact scrollY = {scrollY}/>
      </Box>

      <Box id="admin">
        <Admin scrollY = {scrollY}/>
      </Box>

    </div>
  );
}

export default App;