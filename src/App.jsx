import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";

import 'swiper/css';
import './custom.css';

import { ToastContainer, toast } from 'react-toastify';

function App() {

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
