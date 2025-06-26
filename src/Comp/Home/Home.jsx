import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [Weather, setWeather] = useState(null)
  const [Search, setSearch] = useState(null)
  const [Location, setLocation] = useState(null)
  const [SunMoon, setSunMoon] = useState(true)

  console.log(Search,"ssssssssssssssss")

  if(SunMoon===true){

    document.body.style.backgroundColor = "white";

  }else{
        document.body.style.backgroundColor = "Black";

  }




  async function getWeather() {

    try{

        let res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=c61e800b309848e486f54003252406&q=${Search}&days=3`)
    console.log(res)

    setWeather(res.data.forecast.forecastday)
    setLocation(res.data.location)

    
   

  


    }catch(err){


    }

  

    
  }

  useEffect(() => {
    getWeather()
    
  
    return () => {
      
    }
  }, [Search])






  return <>
<div className='flex flex-col justify-center items-center mt-[50px]'>

    <input type="search" className='bg-blue-950  w-[70%] rounded h-16 text-white p-5 font-serif font-bold' placeholder='Enter A Country Or A City Name' value={Search} onChange={(e)=>setSearch(e.target.value)}/>
    <div onClick={()=>setSunMoon(!SunMoon)} className=' cursor-pointer mt-4 active:animate-spin'>
    {SunMoon==true?<i class="fa-solid fa-sun text-2xl  text-yellow-500 transition-transform duration-700"></i>:<i class="fa-solid fa-moon text-2xl text-gray-700 transition-transform duration-700"></i>}
    </div>

    
    
</div>
    <div className='flex justify-center'>
       <div className='bg-blue-950 py-3  absolute  w-[50%]  top-[30%] text-white font-serif font-bold p-3'>
            {Location?.country} , {Location?.name}

      </div>

    </div>





    {
      Weather==null?  <div className='flex justify-center items-center font-serif font-bold'>
     

<div className="mt-[100px] flex flex-col lg:flex-row gap-3 justify-center mx-5 bg-blue-950 w-[90%] md:w-[70%] lg:w-[50%] rounded p-4 ">
  

    
    

   
  

    
      <div className='bg-blue-900 p-20 rounded w-full lg:w-auto flex justify-between gap-5  text-white' >
        <div className="loader p-20 mx-7  "></div>
        <div className="loader p-20 mx-7  "></div>
        <div className="loader p-20 mx-7  "></div>
         
      </div>
      
  
</div>

  </div>:
      
  <div className='flex justify-center items-center font-serif font-bold'>
     

<div className="mt-[100px] flex flex-col lg:flex-row gap-3 justify-center mx-5 bg-blue-950 w-[90%] md:w-[70%] lg:w-[50%] rounded p-4 ">
  

    {Weather?.map((W) => {
    const date = new Date(W.date);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[date.getDay()];
    

    return<>
   
  

    
      <div className='bg-blue-900 p-4 rounded w-full lg:w-auto flex flex-col text-white' key={W.date}>
         
        <span>Date: {dayName} {W.date}</span>
        <span>Max Temp  : {W.day.maxtemp_c}°C</span>
        <span>Min Temp  : {W.day.mintemp_c}°C</span>
        <span className='mt-3 mx-auto'><img src={W.day.condition.icon} alt="" className='w-16' /></span>
      </div>
      </>
  })}
</div>

  </div>


    }
























      


  
  
  </>
}
