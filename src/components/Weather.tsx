import React, { useState, useEffect } from 'react'
import useGetWeather from '../service/useGetWeather.ts'
import useGetLocation from '../service/useGetLocation.ts'
import Day from './Day.tsx'
import Loading from './Loading.tsx'
import Error from './Error.tsx'

type WeatherProps = {}

const Weather: React.FC<WeatherProps> = () => {
  const [city, setCity] = useState<string>('')
  const getWeather = useGetWeather()
  const getLocation = useGetLocation()
  const handleClick = (e) => {
    e.preventDefault()
    getData()
  }
  const handleClickLocation = (e) => {
    e.preventDefault()
    getLocation.getLocation(city)
  }
  useEffect(() => {
    if (getLocation.data?.results) {
      // use the first result, it should be the best result
      const latitude = getLocation.data.results[0].latitude
      const longitude = getLocation.data.results[0].longitude
      getWeather.getWeather(latitude, longitude)
    }
  }, [getLocation.data])
  return (
    <div>
      <label>Location (city)</label>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={(e) => handleClickLocation(e)}> Search weather </button>
      {getWeather.loading && <Loading />}
      {getWeather.error && <Error />}
      {getWeather.data?.daily.time.map((time, index) => {
        return <Day key={time} currentWeather={getWeather.data.daily} index={index} />
      })}
    </div>
  )
}

export default Weather
