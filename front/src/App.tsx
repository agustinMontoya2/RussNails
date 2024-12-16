import Footer from "./views/footer/footer"
import Home from "./views/home/home"
import Navbar from "./views/navbar/navbar"

function App() {
  return (
    <div className="">
      <nav className="">
    <Navbar />
      </nav>

      <main>
      <Home />
      </main>

      <footer>
      <Footer />
      </footer>
    </div>
  )
}

export default App
