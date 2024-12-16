// import { useState } from "react"
import { Nail } from "../../interfaces"

function CardsCategory({ nail }: { nail: Nail }) {
  // const [currentIndex, setCurrentIndex] = useState(0)

  // const nextSlide = () => {
  //   if (currentIndex < nail.imagenes.length - 3) { // Restar 3 para asegurar que no haya un desbordamiento
  //     setCurrentIndex(currentIndex + 1)
  //   }
  // }

  // const prevSlide = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1)
  //   }
  // }

  // // Subarray de tres imágenes a mostrar
  // const visibleImages = nail.imagenes.slice(currentIndex, currentIndex + 3)

  return (
    <div className="w-full overflow-x-auto flex items-center gap-4 scrollbar-hide">
      {/* Mapeo de las imágenes visibles */}
      {nail.imagenes.map((imagen, index) => (
        <div key={index} className="bg-[#FFFFFF] h-36 w-32 flex-shrink-0 flex flex-col items-center justify-evenly rounded-md transition-all duration-300 ease-in-out hover:h-44 hover:w-40">
        <img src={imagen} alt={`imagen de ${nail.nombre}`} className="w-28 h-28 rounded-md" />
        </div>
      ))}
    </div>
  )

}

export default CardsCategory