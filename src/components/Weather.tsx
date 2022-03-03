import React from 'react'
import useGetWeather from '../service/useGetWeather.ts'
import Day from './Day.tsx'
import Loading from './Loading.tsx'
import Error from './Error.tsx'

type WeatherProps = {}

const Weather: React.FC<WeatherProps> = () => {
  const { getData, data: currentWeather, error, loading } = useGetWeather()
  const handleClick = (e) => {
    e.preventDefault()
    getData()
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e)}> Click me </button>
      {loading && <Loading />}
      {error && <Error />}
      {currentWeather?.daily.time.map((time, index) => {
        return <Day key={time} currentWeather={currentWeather.daily} index={index} />
      })}
    </div>
  )
}

export default Weather
