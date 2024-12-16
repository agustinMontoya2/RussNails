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
    <div className="w-[90%] flex flex-col items-center mt-5">
      <h2 style={{fontFamily: "Voltaire"}} className="text-2xl text-[#FFFFFF] mb-2">Nails</h2>
      <div className="w-full overflow-x-auto flex items-center gap-4 scrollbar-hide">
    {nails.map((nail) => (
      <Card key={nail.id} nail={nail} />
    ))}
  </div>
    </div>
  )
}

export default Cards