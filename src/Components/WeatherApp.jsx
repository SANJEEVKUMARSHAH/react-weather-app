import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'



const WeatherApp = () => {

    let updateinfo =(newinfo)=>
{
setweatherinfo(newinfo);
}


const [weatherinfo, setweatherinfo] = useState(
    {
        City : "Kathmandu",
        humidity: 67,
        pressure: 1012,
        sea_level: 1012,
        temp: 25.5,
        temp_max : 25.5,
        temp_min : 25.5,        
        weather: "Clear Sky",
}

)

  return (
    <div>
        <h2 style={{ textAlign: "center", color : "red" }}> Weather App By Sanjeev Kumar Shah </h2>
        <SearchBox  updateinfo = {updateinfo} />
        <InfoBox info = {weatherinfo} />
    </div>
  )
}

export default WeatherApp