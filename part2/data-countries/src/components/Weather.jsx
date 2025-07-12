import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_API_KEY
function Weather({country}) {

    const [weather, setWeather] = useState(null);
    const latitude = country.capitalInfo?.latlng[0];
    const longitude = country.capitalInfo?.latlng[1];
    console.log(country.capital[0])
    
     

    useEffect(()=>{

        if(latitude && longitude) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then((response)=> setWeather(response.data)
            )
        }
    },[latitude,longitude])
    console.log(weather)
  return (
    <div>
      <h2>Weather in {country.capital[0]}</h2>

      {weather ? (
        <div>
          <p>Temperature: {weather.main.temp} Celsius</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default Weather
