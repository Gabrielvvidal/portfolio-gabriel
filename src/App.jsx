import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projetos" element={<Project/>}/>
          <Route path="/contato" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}