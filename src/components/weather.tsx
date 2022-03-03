import React, { useEffect } from 'react'
import useGetWeather from '../service/useGetWeather.ts'

type WeatherProps = {}

const Weather: React.FC<WeatherProps> = () => {
  const { getWeather, currentWeather, error } = useGetWeather()

  useEffect(() => {
    !currentWeather && !error && getWeather()
  }, [getWeather, error])

  return (
    <div>
      {currentWeather?.temperature} <br />
      {currentWeather?.wind} <br />
      {currentWeather?.description}
    </div>
  )
}

export default Weather
