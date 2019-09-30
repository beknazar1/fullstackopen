import React from 'react'

const Weather = ({weather}) => {
  if (weather === null) return (null)
  return (
    <div>
      <h4>Current weather for {weather.location.name}, {weather.location.country}</h4>
      <p>Current temperature is {weather.current.temperature}F</p>
    </div>
  )
 } 

export default Weather