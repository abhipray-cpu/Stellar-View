import {Player} from '@lottiefiles/react-lottie-player'
import ErrorJSOn from '../assets/Lottie/error.json'
import LoaderJSON from '../assets/Lottie/solar loader.json'
import Mercury from '../assets/Planets/mercury.png'
import Venus from '../assets/Planets/venus.png'
import Earth from '../assets/Planets/earth.png'
import Mars from '../assets/Planets/mars.jpg'
import Jupiter from '../assets/Planets/jupiter.png'
import Saturn from '../assets/Planets/saturn.png'
import Neptune from '../assets/Planets/neptune.png'
import Uranus from '../assets/Planets/uranus.png'
import Logo from '../assets/icon.png'
import {useState,useEffect} from "react"
import {useLoaderData} from 'react-router-dom'
export default function Details(){
const [data,setData] = useState({})
const [comp,setComp] = useState(1)
const [message,setMessage] = useState("")

let loaderData = useLoaderData();
useEffect(()=>{
if(loaderData && loaderData.fail == true){
   setMessage(loaderData.error)   
   setComp(2)
}
if(loaderData && loaderData.fail == false){
   setData(loaderData.data)
   setComp(0)
}
else{
   setMessage("failed to load data")
   setComp(2)
}
},[loaderData])

return(
   <div className="bg-black w-screen pb-6 min-h-screen h-auto flex flex-col items-center overflow-hidden">
   <div className="w-screen flex flex-row justify-center items-center pl-5 pt-5">
                <img src={Logo} alt="Stellar View" className='w-10 h-10'/>
                <h3 className='text-white font-mono font-medium text-lg lg:text-xl ml-3'>Stellar View</h3>
            </div>
      {comp === 0 && (<div></div>)}
      {comp === 1 && (<div className='flex flex-col h-screen justify-center items-center'>
         <Player
            src={LoaderJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "150px", width: "150px" }}
          />
      </div>)}
      {comp === 2 && (<div className='flex flex-col h-screen justify-center items-center'>
         <Player
            src={ErrorJSOn}
            loop
            autoplay
            speed={2}
            style={{ height: "150px", width: "150px" }}
          />
             <h2 className='text-white font-medium font-sans text-xl lg:text-2xl'>{message}</h2>
      </div>)}
   </div>
)
}


export async function loader({params}){
   try{
      let url = `https://api.le-systeme-solaire.net/rest/bodies/${params.code}`
      const response = await fetch(url,{method:"GET"})
      if(!response.ok){
        const data = await response.json()
        return{data:"",error:data.message,failed:true}
      }
      const data = await response.json()
      return {data:data,error:"",failed:false}
   }
   catch(err){
    return {data:'',error:err.message,failed:true}
   }
}