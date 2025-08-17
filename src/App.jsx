import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";

import 'swiper/css';
import './custom.css';

import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   window.gtag("config", "G-B47XZDTZRN", { page_path: location.pathname });
  // }, [location]);

  return (
    <>
    
      <Router>
        
        <Header />
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
      
          <ToastContainer 
            autoClose={2000}
            position="bottom-right"
            theme="colored"
            
          />
        <Footer />
      
      </Router>
      

    </>
  )
}

export default App
