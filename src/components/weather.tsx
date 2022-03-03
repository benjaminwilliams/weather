import React, { useEffect } from 'react'
import useGetWeather from '../service/useGetWeather.ts'

type WeatherProps = {}

const Weather: React.FC<WeatherProps> = () => {
  const { getWeather, currentWeather, error } = useGetWeather()
  const handleClick = (e) => {
    e.preventDefault()
    getWeather()
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e)}> Click me </button>
      {currentWeather?.temperature} <br />
      {currentWeather?.wind} <br />
      {currentWeather?.description}
    </div>
  )
}

export default Weather
