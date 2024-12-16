import instagram from "../../assets/instagram.svg"
import whatsapp from "../../assets/whatsapp.svg"

function Footer() {
  return (
    <div className="w-full bg-[#1E90FF] h-16 items-center flex justify-center">
      <div className="w-[90%] flex justify-between items-center">
        <div className="flex flex-col sm:flex-row">
      <h1 style={{fontFamily: "Voltaire"}} className="text-3xl text-[#FFFFFF] font-voltaire -mb-2">RussNailss</h1>
      <div className="flex justify-between sm:ml-4 sm:gap-4">
        <a href="https://www.instagram.com/russnailss/" target="_blank">
      <img src={instagram} alt="instagram" className="w-9 h-9 cursor-pointer" />
        </a>
        <a href="https://wa.me/5491130171191" target="_blank">
      <img src={whatsapp} alt="whatsapp" className="w-9 h-9 cursor-pointer" />
        </a>
      </div>
      </div>
      <div>
      <p style={{fontFamily: "Poppins"}} className="text-sm text-[#FFFFFF]">&copy; 2024 RussNailss.</p>
      </div>
      </div>
    </div>
  )
}

export default Footer