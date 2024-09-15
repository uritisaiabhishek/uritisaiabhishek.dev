import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Header from './components/Header'
import Footer from './components/Footer'
import Single from './pages/Single'
import SinglePortfolio from './pages/SinglePortfolio'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:projectName' element={<SinglePortfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:blogTitle' element={<Single />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
