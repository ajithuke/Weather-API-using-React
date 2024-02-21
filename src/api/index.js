export const getWeather =async (city)=>{
    const response =await fetch(`https://api.weatherapi.com/v1/current.json?key=bb749ff7e0f3436fa0954632240502&q=(city)&aqi=no`)
    return await response.json()
}