import React from 'react'
import Weather from './Weather'

function Country({countries}) {

  return (
    <div>
      {countries.map((country)=>{
        // console.log(country)
       return <div key={country.name.common}>
        <h2>{country.name.common}</h2>

        <div>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map((language, index) => (
                <li key={index}>{language}</li>
                ))}
            </ul>

     <img src={country.flags.png} alt={country.flags.alt} style={{width:'100px'}}/>
   <Weather country={country}/>
           
        </div>
       </div>
       
      })}
    </div>
  )
}

export default Country
