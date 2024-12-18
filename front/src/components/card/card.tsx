// import { Nail } from "../../interfaces";

function Card({nail}: any) {
    
  return (
    <div className="bg-[#FFFFFF] h-[20rem] w-[20rem] hover:scale-110 flex-shrink-0 flex flex-col items-center justify-evenly rounded-xl transition-all duration-300 ease-in-out shadow-centered hover:shadow-hoverCentered">
    <h4 style={{ fontFamily: "Voltaire" }} className=" text-[#1E90FF] text-3xl">{nail.nombre}</h4>
    <img src={nail.imagenes[0]} alt={`imagen de ${nail.nombre}`} className="w-64 h-64 rounded-md" />
    <h4 className=" font-poppins text-[#4F4F4F] text-2xl">${nail.precio}</h4>
</div>
  )
}

export default Card