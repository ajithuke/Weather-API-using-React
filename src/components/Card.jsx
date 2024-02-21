import React from "react";
import { useWeather } from "../context/Weather";

const Card = ()=>{
    const weather = useWeather()

    return (
        <div className="card">
            <h2>{weather.data?.current?.temp_c} Celsius</h2>
        </div>
    )
}

export default Card