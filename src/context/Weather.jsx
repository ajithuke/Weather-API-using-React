import { useState, createContext, useContext } from "react";
import { getWeather } from "../api";
const WeatherContext = createContext(null)

export const useWeather = ()=>{
    return useContext(WeatherContext)
}

export const WeatherProvider= (props)=>{
    const [data,setData] = useState(null)
    const [city,setCity] = useState(null)

    const fetchData=async ()=>{
        const response= await getWeather(city)
        setData(response)
    }

    return (
        <WeatherContext.Provider value={{city,data,setCity,fetchData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}