import {Player} from '@lottiefiles/react-lottie-player'
import IntroJSON from '../assets/Lottie/intro.json'
import {useNavigate } from 'react-router-dom'
import {useEffect} from 'react'
export default function Landing(){
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/home')
    },[])
    return(
       <div className='bg-gray-950 w-screen overflow-x-hidden min-h-screen h-auto flex flex-col items-center pt-20'>
        <Player
            src={IntroJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "300px", width: "300px" }}
          />
          <h2 className='text-white font-serif text-3xl font-medium tracking-wide lg:text-6xl'>Stellar View</h2>
          <p className='text-gray-100 font-serif font-normal text-lg lg:text-2xl text-center mt-5'>Explore the Cosmos: Your Space Adventure Awaits!</p>
       </div>        
    )
}