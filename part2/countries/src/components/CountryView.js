import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const secrets = require('../secrets.json');

const CountryView = ({result}) => {
  const languages = result.languages.map( (lang) => 
    <li key={lang.name}>{lang.name}</li>
  );

  const [ weather, setWeather ] = useState(null);
  
  const weatherHook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${secrets.apixu}&query=${result.capital}&units=f`)
      .then(response => {
        setWeather(response.data);
      })
  }

  useEffect(weatherHook, [])

  return (
    <div>
      <h2>{result.name}</h2>
      <p>capital {result.capital}</p>
      <p>population {result.population}</p>
      <h3>Languages</h3>
      <ul>{languages}</ul>
      <img src={result.flag} alt={`country flag of ${result.name}`}  width="150"/>
      <Weather weather={weather} />
    </div>
  )
}

export default CountryView