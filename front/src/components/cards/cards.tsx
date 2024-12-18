import { Link } from "react-router-dom"
import { Nails } from "../../interfaces"
import Card from "../card/card"
// import { useState } from "react"

function Cards({nails}: Nails) {
  // const [currentIndex, setCurrentIndex] = useState(0)
  
  // const nextSlide = () => {
  //   if (currentIndex < nails.length - 3) {
  //     setCurrentIndex(currentIndex + 1)
  //   }
  // }
  // const prevSlide = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1)
  //   }
  // }

  // const visibleNails = nails.slice(currentIndex, currentIndex + 3)
  return (
    <div className="w-full flex flex-col items-center mt-5 mb-5">
      <h2 style={{fontFamily: "Voltaire"}} className="text-4xl text-[#FFFFFF] mb-2">Nails</h2>
      <div className=" flex flex-col items-center gap-7 xl:grid xl:grid-cols-3 xl:gap-12 ">
    {nails.map((nail) => (
      <Link to={`/${nail.id}`} key={nail.id}>
      <Card key={nail.id} nail={nail}/>
      </Link>
    ))}
  </div>
    </div>
  )
}

export default Cards