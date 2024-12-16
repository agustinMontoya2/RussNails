// import { Nail } from "../../interfaces";

function Card({nail}: any) {
    
  return (
    <div className="bg-[#FFFFFF] h-36 w-32 flex-shrink-0 flex flex-col items-center justify-evenly rounded-md transition-all duration-300 ease-in-out hover:h-44 hover:w-40 scrollbar-hide">
    <h4 style={{ fontFamily: "Voltaire" }} className="text-sm text-[#1E90FF]">{nail.nombre}</h4>
    <img src={nail.imagenes[0]} alt={`imagen de ${nail.nombre}`} className="w-24 h-24 rounded-md" />
    <h4 className="text-sm font-poppins text-[#4F4F4F]">${nail.precio}</h4>
</div>
  )
}

export default Card