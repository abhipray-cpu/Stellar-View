import Mercury from '../assets/Planets/mercury.png'
import Venus from '../assets/Planets/venus.png'
import Earth from '../assets/Planets/earth.png'
import Mars from '../assets/Planets/mars.jpg'
import Jupiter from '../assets/Planets/jupiter.png'
import Saturn from '../assets/Planets/saturn.png'
import Neptune from '../assets/Planets/neptune.png'
import Uranus from '../assets/Planets/uranus.png'
export default function Planets(){
    const planets = [['Mercury',Mercury],
    ['Venus',Venus],
    ['Earth',Earth],
    ['Mars',Mars],
    ['Jupiter',Jupiter],
    ['Saturn',Saturn],
    ['Neptune',Neptune],
    ['Uranus',Uranus]]
    
    return(
        <section className='flex flex-row flex-wrap justify-center mt-7 w-screen'>
             {planets.map((val,index)=>(
                <div key={index} className='cursor-pointer'>
                    <img src={val[1]} alt={val[0]} className='w-[200px] h-[200px] object-cover' />
                    <h3 className='text-white font-sans font-normal text-center'>{val[0]}</h3>
                </div>
             ))}
        </section>
    )
}