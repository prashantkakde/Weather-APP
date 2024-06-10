import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:28.4,
        humidity:37,
        temp:29.05,
        tempMax:29.05,
        tempMin:29.05,
        weather:"haze",
    });

let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
};

    return(
    <div style={{textAlign:"center"}}>
        <h2>Weather App By Prashant</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>

    </div>
);
}