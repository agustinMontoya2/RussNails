import Cards from '../../components/cards/cards'
import CardsCategory from '../../components/cardsCategory/cardsCategory'
import nails from '../../helpers/Nails.json'

function Home() {
    
  return (
    <div className="bg-[#ADD8E6] flex flex-col justify-center items-center">
      <h2 className="font-poppins font-semibold text-[#1E90FF] text-2xl mt-5">Explora el catalogo</h2>
      <h3 className="font-poppins text-[#4F4F4F] text-base">Encontra el estilo perfecto para cada ocasion</h3>
      <Cards nails={nails.nails}/>
      {nails.nails.map((nail) => (
        <div className='w-[90%] flex flex-col items-center mt-2 mb-4' id={nail.id}>
            <h2 style={{fontFamily: "Voltaire"}} className="text-2xl text-[#FFFFFF] mb-2">{nail.nombre}</h2>
                <CardsCategory key={nail.id} nail={nail} />
            </div>
        
      ))}
    </div>
  )
}

export default Home