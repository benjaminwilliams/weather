import React, { useEffect } from 'react'
import useGetWeather from '../service/useGetWeather.ts'
import Day from './Day.tsx'

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
      {currentWeather?.daily.time.map((time, index) => {
        return <Day key={time} currentWeather={currentWeather.daily} index={index} />
      })}
    </div>
  )
}

export default Weather
