import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Header from "./components/Header";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  // loading page
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage = {setCurrentPage} />;
      case "menu":
        return <Menu />;
      case "contact":
        return <Contact />;
      case "admin":
        return <Admin />;
      default:
        return <Home setCurrentPage = {setCurrentPage} />;
    }
  };
  if (loading) return <Loading />;

  return (
    <div>
      <Header setCurrentPage = {setCurrentPage}/>
      <div className="p-6">{renderPage()}</div>
    </div>
  );
}

export default App;