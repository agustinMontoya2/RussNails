import instagram from "../../assets/instagram.svg"
import whatsapp from "../../assets/whatsapp.svg"

function Footer() {
  return (
    <div className="w-full bg-[#1E90FF] h-16 items-center flex justify-center">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div className="">
      <h1 style={{fontFamily: "Voltaire"}} className="text-3xl md:text-4xl text-[#FFFFFF] font-voltaire">RussNailss</h1>
        </div>
        
      <div className="">
      <p style={{fontFamily: "Poppins"}} className="text-sm md:text-base text-[#FFFFFF]">&copy; 2024 RussNailss.</p>
      </div>
      <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <a href="https://www.instagram.com/russnailss/" target="_blank">
      <img src={instagram} alt="instagram" className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://wa.me/5491130171191" target="_blank">
      <img src={whatsapp} alt="whatsapp" className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      </div>
    </div>
  )
}

export default Footer