
import Logo from '../assets/icon.png'
import {Player} from '@lottiefiles/react-lottie-player'
import LoaderJSON from '../assets/Lottie/solar loader.json'
import ErrorJSON from '../assets/Lottie/error.json'
import { useLoaderData } from 'react-router-dom'
import {useEffect,useState} from 'react'
import CarouselComp from '../components/Carousel'
import Planets from '../components/Planets'
export default function Home(){
    const [data,setData] = useState({})
    const [comp,setComp] = useState(1)
    const [message,setMessage] = useState("")
    const loaderData = useLoaderData()
    useEffect(()=>{
        setComp(1)
        if(loaderData && loaderData.failed === true){
            setMessage(loaderData.error)
            setComp(2)
        }
        if(loaderData && loaderData.failed === false){
            setData(loaderData.data) 
            setComp(0)
        }
    },[loaderData])
    return(
        <div className="bg-black w-screen overflow-hidden min-h-screen h-auto flex flex-col items-center overflow-hidden'">
            <div className="w-screen flex flex-row justify-center items-center pl-5 pt-5">
                <img src={Logo} alt="Stellar View" className='w-10 h-10'/>
                <h3 className='text-white font-mono font-medium text-lg lg:text-xl ml-3'>Stellar View</h3>
            </div>
            <div className='flex flex-col justify-center items-center'>
               {comp === 1 && <div className='mt-28'>
                <Player
            src={LoaderJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "250px", width: "250px" }}
          />
               </div>}
               {comp === 0 && <div className='w-screen mt-4 mx-0 px-0 flex flex-col items-center justify-center overflow-x-hidden'>
                    <CarouselComp images={data}></CarouselComp>
                     <Planets></Planets>
               </div>}
               {comp === 2 && <div className='mt-28'>
                <Player
            src={ErrorJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "150px", width: "150px" }}
          />
             <h2 className='text-white font-medium font-sans text-xl lg:text-2xl'>{message}</h2>
               </div>}
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
