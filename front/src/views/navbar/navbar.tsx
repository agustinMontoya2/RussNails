import Menu from "../../assets/menu.svg"
import { useState } from "react"
import { nails } from "../../helpers/Nails.json"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="relative">
        {/* Barra de navegación */}
        <div className="w-full bg-[#1E90FF] h-16 items-center flex justify-center">
          <div className="w-[90%] flex justify-between items-center">
            <h1 style={{ fontFamily: "Voltaire" }} className="text-5xl text-[#FFFFFF] font-voltaire">
              RussNailss
            </h1>
            <img
              src={Menu} // Reemplaza con el icono real
              alt="menu"
              className="w-10 h-10 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
  
        {/* Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-[#024581] bg-opacity-85 text-white p-4 w-60">
            <div className="mb-4">
              <a href="/" className="text-white text-lg block mb-2 hover:bg-[#024581]">
                Inicio
              </a>
              <hr className="border-t-2 border-white mb-4" />
              {nails.map((nail) => (
                <a
                  key={nail.id}
                  href={`/${nail.nombre}`} // Cambia el href por lo que sea necesario
                  className="text-white text-lg block mb-2 hover:bg-[#024581]"
                >
                  {nail.nombre}
                </a>
              ))}
              <hr className="border-t-2 border-white mb-4 hover:bg-[#024581]" />
              <a href="https://wa.me/5491130171191" target="_blank" className="text-white text-lg block hover:bg-[#024581]">
                Contáctate conmigo
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }

export default Navbar