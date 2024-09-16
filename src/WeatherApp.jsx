import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import './WeatherApp.css'


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({city: "vancouver",
    region:"British Columbia",
    country: "Canada",
    temp: 14.2,
    feelslike: 14.9,
    humidity:94});

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);

    }

    return(
        <div style={{textAlign:"center"}}>
            
            <h1>WeatherApp</h1>
           
             <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
          
        </div>
    )

}