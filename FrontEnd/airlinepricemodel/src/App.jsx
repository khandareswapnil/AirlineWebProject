
import './App.css'
import { Home } from './Component/Home'
import { Login } from './Component/Login'
import {About} from './Component/About'
import {Services} from './Component/Services'
import {Contact} from './Component/contact'
import { BrowserRouter,Routes,Route } from 'react-router'
function App() {
  

  return (
    <>
       <BrowserRouter>  {/* Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
