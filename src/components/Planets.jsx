import Mercury from '../assets/Planets/mercury.png'
import Venus from '../assets/Planets/venus.png'
import Earth from '../assets/Planets/earth.png'
import Mars from '../assets/Planets/mars.jpg'
import Jupiter from '../assets/Planets/jupiter.png'
import Saturn from '../assets/Planets/saturn.png'
import Neptune from '../assets/Planets/neptune.png'
import Uranus from '../assets/Planets/uranus.png'
import { useNavigate } from 'react-router-dom'
import {useEffect,useState} from 'react'
export default function Planets(){
    const planets = [['Mercury',Mercury],
    ['Venus',Venus],
    ['Earth',Earth],
    ['Mars',Mars],
    ['Jupiter',Jupiter],
    ['Saturn',Saturn],
    ['Neptune',Neptune],
    ['Uranus',Uranus]]
    const navigate = useNavigate()
    const [to,setTo] = useState('')
    useEffect(()=>{
        if(to){
            let postfix;
            switch(to){
                case 'Mercury':
                    postfix="mercure";
                    break;
                
                case 'Venus':
                    postfix="venus"
                    break;
                
                case  'Earth':
                    postfix = 'terre';
                    break;
                
                case 'Mars':
                    postfix = 'mars';
                    break;
                
                case 'Jupiter':
                    postfix = 'jupiter'
                    break;
    
                case 'Saturn':
                    postfix = 'saturne'
                    break;
    
                case 'Neptune':
                    postfix = 'neptune';
                    break;
    
                case 'Uranus':
                    postfix = 'uranus';
                    break;
                default:
                    postfix = 'terre'
                    }
                    let url = "/details/"+postfix;
            navigate(url)
        }
    },[to,navigate])
    return(
        <section className='flex flex-row flex-wrap justify-center mt-7 w-screen'>
             {planets.map((val,index)=>(
                <div key={index} className='cursor-pointer' onClick={()=>{setTo(val[0])}}>
                    <img src={val[1]} alt={val[0]} className='w-[200px] h-[200px] object-cover'/>
                    <h3 className='text-white font-sans font-normal text-center'>{val[0]}</h3>
                </div>
             ))}
        </section>
    ) 
}