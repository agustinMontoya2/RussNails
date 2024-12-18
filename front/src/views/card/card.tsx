import { Link, useParams } from "react-router-dom"
import nails from '../../helpers/Nails.json'
import arrowLeft from "../../assets/arrowLeft.svg"
import arrowRight from "../../assets/arrowRight.svg"
import backArrow from "../../assets/backArrow.svg"
import { useState } from "react"


function Card() {
    const { id } = useParams()
    const nail = nails.nails.find((nail) => nail.id === id)
    console.log(nail);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (nail) {
            
            setCurrentIndex((prevIndex) => (prevIndex + 1) % nail.imagenes.length);
        }
    };
  
    const handlePrev = () => {
        if (nail) {
            
            setCurrentIndex((prevIndex) => 
                (prevIndex - 1 + nail.imagenes.length) % nail.imagenes.length
        );
    }
    };
    
  return (
    <div className="bg-[#ADD8E6] h-screen flex justify-center items-center">
        <Link to="/">
         <img
    src={backArrow}
    alt="Flecha"
    className="absolute top-24 left-[5%] w-8 h-8 cursor-pointer"
  />
  </Link>
  {/* Contenedor principal */}
  <div style={{maxHeight: "36rem"}} className="bg-[#FFFFFF] w-[90%] max-w-4xl h-[65%] flex flex-col rounded-xl shadow-hoverCentered">
    {nail ? (
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <div className="h-1/6 flex items-center justify-center">
        <h4 style={{ fontFamily: "Voltaire" }} className=" text-[#1E90FF] text-3xl">{nail.nombre}</h4>
        </div>
        <div className="h-4/6 flex flex-col items-center justify-evenly md:flex-row">
        <div className="w-full flex flex-col items-center md:w-1/2">
      {nail.imagenes.length > 1 ? (
        // Carrusel para múltiples imágenes
        <>
          <div className="w-full flex justify-evenly items-center">
            <img
              src={arrowLeft}
              alt="Flecha izquierda"
              className="w-8 h-8 cursor-pointer"
              onClick={handlePrev}
            />
            <img
              src={nail.imagenes[currentIndex]}
              alt={`Imagen de ${nail.nombre}`}
              className="w-64 h-64 rounded-md object-cover"
            />
            <img
              src={arrowRight}
              alt="Flecha derecha"
              className="w-8 h-8 cursor-pointer"
              onClick={handleNext}
            />
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {nail.imagenes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-[#1E90FF]" : "bg-[#ADD8E6]"
                }`}
              ></div>
            ))}
          </div>
        </>
      ) : (
        // Mostrar solo una imagen
        <img
          src={nail.imagenes[0]}
          alt={`Imagen de ${nail.nombre}`}
          className="w-64 h-64 rounded-md object-cover"
        />
      )}
    </div>
        <div className="h-full flex flex-col items-center justify-evenly md:w-1/2">
            <p className="font-poppins text-[#4F4F4F] text-center">{nail.descripcion}</p>
            <h4 className=" font-poppins text-[#4F4F4F] text-2xl">${nail.precio}</h4>
        </div>
        </div>
        <div className="h-[10%] flex items-center justify-center">
        <button className="bg-[#1E90FF] text-white py-2 px-4 rounded-md">Agendar turno</button>
        </div>
      </div>
    ) : (
      <p className="text-center text-gray-700">Producto no encontrado</p>
    )}
  </div>
</div>
  )
}

export default Card