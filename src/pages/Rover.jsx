import { useLoaderData } from "react-router-dom"
import {useEffect,useState,Suspense} from 'react'
import LoaderJSON from '../assets/Lottie/solar loader.json'
import ErrorJSON from '../assets/Lottie/solar loader.json'
import {Player} from '@lottiefiles/react-lottie-player'
import Logo from '../assets/icon.png'
import { div } from "three/examples/jsm/nodes/Nodes.js"
export default function Rover(){
    const [data,setData] = useState({})
    const [comp,setComp] = useState(1)
    const [message,setMessage] = useState('')

    const loaderData = useLoaderData()

    useEffect(()=>{
        if(loaderData && loaderData.failed == true){
            setMessage(loaderData.error)
            setComp(2)
        }
        if(loaderData && loaderData.failed == false){
            setData(loaderData.data)
            setComp(0)
        }
    },[loaderData])
    return(
        <Suspense fallback={<div className=' bg-black w-screen flex lex flex-col h-screen justify-center items-center'>
        <Player
    src={LoaderJSON}
    loop
    autoplay
    speed={2}
    style={{ height: "250px", width: "250px" }}
  />
       </div>}>
            <div className="bg-black w-screen pb-6 min-h-screen h-auto flex flex-col items-center overflow-hidden'">
            <div className="w-screen flex flex-row justify-center items-center pl-5 pt-5">
                <img src={Logo} alt="Stellar View" className='w-10 h-10'/>
                <h3 className='text-white font-mono font-medium text-lg lg:text-xl ml-3'>Stellar View</h3>
            </div>
            {comp ==0 && (
                <section className="w-screen flex flex-row flex-wrap gap-3 items-center justify-center mt-5">
                    {data['photos'].map((val,index)=>(
                        <div key={index} className="w-[300px]">
                        <img src={val['img_src']} alt={val['camera']['full_name']} className="w-[300px] h-[300px] object-fill"/>
                        <h2 className="text-white font-bold text-center font-sans text-xl lg:text-2xl">{val['camera']['full_name']}</h2>
                        <h4 className="text-white font-normal text-center font-sans text-lg lg:text-xl">Rover:{val['rover']['name']}</h4>
                        </div>
                    ))}
                </section>
            )}
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
        </Suspense>
    )
}


export async function loader(){
    try{
        const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2024-1-21&api_key=ZFga8DaHhSDOA3Len15363IwjS91VKh0qazG2kbq'
        const response = await fetch(url,{method:"GET"})

        if(!response.ok){
            const data = await response.json()
            return {data:'',error:data.error,failed:true}
        }
        const data = await response.json()
        return {data:data,error:'',failed:false}
    
    }
    catch(err){
        return{data:"",error:err.message,failed:true}
    }
}