import React, { useEffect } from 'react';
import axios from 'axios';
import {nanoid} from 'nanoid'
import Country from './components/Country';

// const url ='https://studies.cs.helsinki.fi/restcountries/api/all'
// const weatherAPI = 'https://api.openweathermap.org/data/2.5/onecall?lat=-1.95&lon=30.05&exclude=minutely,alerts&appid=YOUR_API_KEY';


function App() {

  const [countries, setCountries] = React.useState([]);
  const [country, setCountry] = React.useState("");

  useEffect(()=>{
    if(country.length > 0){
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response)=>{
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setCountries(data);
      })
      .catch((error)=>{
        console.error("Error fetching countries:", error);
        setCountries([]);
      })}
  },[country])
  

  const searching = countries.filter((nation)=> nation.name?.common.toLowerCase().includes(country.toLowerCase()));

  // console.log(searching.length)

  
  
      
  return (
    <div>
      <div>
          Find Countries  <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} />
        </div> 

        {searching.length > 10 && <h2>Too many matches, specify another filter</h2>}
        {searching.length > 1 && searching.length <= 10 && searching.map((nation)=>{
            return <div key={nanoid()}>
              <h4>{nation.name.common}</h4>
              <button onClick={()=>setCountry(nation.name.common)}>show</button>
            </div>
        })}

          {searching.length === 1  && <Country countries={searching} />}

         
    </div>
  )
}

export default App
