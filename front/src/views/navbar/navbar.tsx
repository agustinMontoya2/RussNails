import Menu from "../../assets/menu.svg"
import { useEffect, useState } from "react"
import { nails } from "../../helpers/Nails.json"
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="relative">
        {/* Barra de navegación */}
        <div className="w-full bg-[#1E90FF] h-16 items-center flex justify-center">
          <div className="w-[90%] flex justify-between items-center">
            <Link to="/">
            <h1 style={{ fontFamily: "Voltaire" }} className="text-5xl text-[#FFFFFF] font-voltaire">
              RussNailss
            </h1>
            </Link>
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
              <Link to="/" onClick={toggleMenu} className="text-white text-lg block mb-2 hover:bg-[#024581]">
                Inicio
              </Link>
              <hr className="border-t-2 border-white mb-4" />
              {nails.map((nail) => (
                <Link
                onClick={toggleMenu}
                  key={nail.id}
                  to={`/nails/${nail.id}`} // Cambia el to por lo que sea necesario
                  className="text-white text-lg block mb-2 hover:bg-[#024581]"
                >
                  {nail.nombre}
                </Link>
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