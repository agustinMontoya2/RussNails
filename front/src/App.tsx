import { Route, Routes } from "react-router-dom"
import Footer from "./views/footer/footer"
import Home from "./views/home/home"
import Navbar from "./views/navbar/navbar"
import Card from "./views/card/card"


function App() {
  return (
    <div className="">
      <nav className="">
    <Navbar />
      </nav>

      <main>
        <Routes>
        <Route path="/" element={<Home />} />
      {/* <Home /> */}
      <Route path="/:id" element={<Card />} />
        </Routes>
      </main>

      <footer>
      <Footer />
      </footer>
    </div>
  )
}

export default App
