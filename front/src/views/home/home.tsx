import Cards from '../../components/cards/cards'
import nails from '../../helpers/Nails.json'

function Home() {
    
  return (
    <div className="min-h-screen bg-[#ADD8E6] flex flex-col justify-center items-center">
      <div className='flex flex-col items-center xl:w-[90%]'>
      <h2 className="font-poppins font-semibold text-[#1E90FF] text-3xl mt-5">Explora el catalogo</h2>
      <h3 className="font-poppins text-[#4F4F4F] text-base">Encontra el estilo perfecto para cada ocasion</h3>
      <Cards nails={nails.nails}/>
      </div>
    </div>
  )
}

export default Home