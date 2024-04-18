
import Logo from '../assets/icon.png'
import {Player} from '@lottiefiles/react-lottie-player'
import LoaderJSON from '../assets/Lottie/solar loader.json'
import ErrorJSON from '../assets/Lottie/error.json'
import { useLoaderData } from 'react-router-dom'
import {useEffect,useState} from 'react'
import CarouselComp from '../components/Carousel'
import Planets from '../components/Planets'
import EarthJSON from '../assets/Lottie/earth.json'
import WeatherJSON from '../assets/Lottie/mars weather.json'
import RoverJSON from '../assets/Lottie/mars rover.json'
export default function Home(){
    const [data,setData] = useState({})
    const [comp,setComp] = useState(1)
    const [message,setMessage] = useState("")
    const loaderData = useLoaderData()
    useEffect(() => {
        if (loaderData && loaderData.failed === true) {
            setMessage(loaderData.error);
            setComp(2);
        } else if (loaderData && loaderData.failed === false) {
            setData(loaderData.data);
            setComp(0);
        } 
    }, [loaderData]);
    return(
        <div className="bg-black w-screen pb-6 min-h-screen h-auto flex flex-col items-center overflow-hidden'">
            <div className="w-screen flex flex-row justify-center items-center pl-5 pt-5">
                <img src={Logo} alt="Stellar View" className='w-10 h-10'/>
                <h3 className='text-white font-mono font-medium text-lg lg:text-xl ml-3'>Stellar View</h3>
            </div>
            <div className='flex flex-col justify-center items-center'>
            {comp === 0 && (<div className='w-screen mt-4 mx-0 px-0 flex flex-col items-center justify-center overflow-x-hidden'>
                    <CarouselComp images={data}></CarouselComp>
                    <section className="flex flex-row flex-wrap items-center justify-center gap-10">
                        <div>
                        <Player
            src={EarthJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "200px", width: "200px" }}
          />
           <h3 className='text-white font-sans font-normal text-center'>Earth</h3>
                        </div>
                        
                        <div>
                        <Player
            src={WeatherJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "200px", width: "200px" }}
          />
           <h3 className='text-white font-sans font-normal text-center'>Mars Weather</h3>
                        </div>
                        
                        <div>
                        <Player
            src={RoverJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "200px", width: "200px" }}
          />
           <h3 className='text-white font-sans font-normal text-center'>Mars Rover</h3>
                        </div>
                    </section>
                     <Planets></Planets>
               </div>)}
               {comp === 1 && (<div className='flex lex flex-col h-screen justify-center items-center'>
                <Player
            src={LoaderJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "250px", width: "250px" }}
          />
               </div>)}
               {comp === 2 && (<div className='flex flex-col h-screen justify-center items-center'>
                <Player
            src={ErrorJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "150px", width: "150px" }}
          />
             <h2 className='text-white font-medium font-sans text-xl lg:text-2xl'>{message}</h2>
               </div>)}
            </div>
        </div>
    )
}


export async function loader(){
    try{
        const url = "https://api.nasa.gov/planetary/apod?count=10&api_key=ZFga8DaHhSDOA3Len15363IwjS91VKh0qazG2kbq"
    const response = await fetch(url,{method:"GET"})

    if(!response.ok){
        const error = await response.json()
        return {data:"",error:error,failed:true}
    }
    const data = await response.json()
    return {data:data,error:"",failed:false}
    }
    catch(err){
        return{data:"",error:err.message,failed:true}
    }
}
