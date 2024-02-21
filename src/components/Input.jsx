import React from "react";
import { useWeather } from "../context/Weather";

const Input = ()=>{
    const Weather= useWeather()

    return (
        <input className="user-input"
            value={Weather.city}
            onChange={(e)=>{Weather.setCity(e.target.value)}}
        />
    )
}

export default Input