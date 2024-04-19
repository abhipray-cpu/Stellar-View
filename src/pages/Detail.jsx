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
import Moon from '../assets/Planets/moon.png'
import Logo from '../assets/icon.png'
import {useState,useEffect,Suspense} from "react"
import {useNavigate, useLoaderData,useParams } from 'react-router-dom'
export default function Details(){
const [data,setData] = useState({})
const [comp,setComp] = useState(1)
const [message,setMessage] = useState("")
let {code} = useParams()
const map ={
   'mercure':Mercury,
   'venus':Venus,
   'terre':Earth,
   'mars':Mars,
   'jupiter':Jupiter,
   'saturne':Saturn,
   'uranus':Uranus,
   'neptune':Neptune

}
let loaderData = useLoaderData();
const navigate = useNavigate();
useEffect(()=>{
if(loaderData && loaderData.failed == true){
   setMessage(loaderData.error)   
   setComp(2)
}
if(loaderData && loaderData.failed == false){
   setData(loaderData.data)
   setComp(0)
}
if(code === 'mercure' || code === 'venus' || code === 'terre' || code === 'mercury' || code ==='jupiter' || code ==='saturne' || code === 'neptune' || code === 'uranus'){
}
},[loaderData,code])
const redirect = (value)=>{
   console.log(value)
   let param = value.split('/')
   param = param[param.length-1]
   const url = "/details/"+param
   navigate(url)
}
return(
   <div className="bg-black w-screen pb-6 min-h-screen h-auto flex flex-col items-center overflow-hidden">
   <div className="w-screen flex flex-row justify-center items-center pl-5 pt-5">
                <img src={Logo} alt="Stellar View" className='w-10 h-10'/>
                <h3 className='text-white font-mono font-medium text-lg lg:text-xl ml-3'>Stellar View</h3>
            </div>
      {comp === 0 && (<Suspense fallback={<div className='flex flex-col h-screen justify-center items-center'>
         <Player
            src={LoaderJSON}
            loop
            autoplay
            speed={2}
            style={{ height: "150px", width: "150px" }}
          />
      </div>}>
         <div className='flex flex-col items-center justify-center gap-3'>
         <img src={map[code]?map[code]:Moon} alt={code} className='w-[200px] h-[200px] object-cover' />
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Name: <strong className='text-gray-200'>{data['englishName']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Body Type: <strong className='text-gray-200'>{data['bodyType']}</strong> </h2>
          {data['avgTemp'] && <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Average Temp: <strong className='text-gray-200'>{data['avgTemp']}</strong> </h2>}
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Density: <strong className='text-gray-200'>{data['density']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Mass=<strong className='text-gray-200'>Value:{data['mass']['massValue']},Exponent;{data['mass']['massExponent']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Volume=<strong className='text-gray-200'>Value:{data['vol']['volValue']},Exponent;{data['vol']['volExponent']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Aphelion: <strong className='text-gray-200'>{data['aphelion']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">ArgPeriapsis:<strong className='text-gray-200'>{data['argPeriapsis']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">AxialTilt:<strong className='text-gray-200'>{data['axialTilt']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Eccentricity:<strong className='text-gray-200'>{data['eccentricity']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">EqualRadius:<strong className='text-gray-200'>{data['equaRadius']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Escape Velocity:<strong className='text-gray-200'>{data['escape']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Flattening:<strong className='text-gray-200'>{data['flattening']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Gravity:<strong className='text-gray-200'>{data['gravity']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">Inclination:<strong className='text-gray-200'>{data['inclination']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">LongAscNode:<strong className='text-gray-200'>{data['longAscNode']}</strong> </h2>
          <h2 className="text-white font-medium text-xl lg:text-2xl tracking-wide font-sans">MainAnomaly:<strong className='text-gray-200'>{data['mainAnomaly']}</strong> </h2>
          {data['moons'] && (
            <div className='w-[90vw] rounded-lg shadow-xl bg-gray-600 lg:w-[60vw] pt-2'>
            <h2 className='font-bold font-sans text-white text-lg lg:text-xl tracking-wider text-center'>Moons</h2>
            <ul className='flex flex-row flex-wrap gap-3 justify-center'>
               {data['moons'].map((val,index)=>(
                  <li key={index} className='text-white font-sans font-medium text-lg lg:text-xl cursor-pointer' onClick={()=>{redirect(val['rel'])}}>{val['moon']}</li>
               ))}
            </ul>
          </div>
          )}
          {/* 
          <h2>Volume: <strong>VolumeValue:{data['vol']['volValue']},VolumeExponent:{data['vol']['volExponent']}</strong> </h2> */}
      </div>
      </Suspense> )}
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