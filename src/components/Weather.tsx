import React, { useState, useEffect } from 'react'
import useGetWeather from '../service/useGetWeather.ts'
import useGetLocation from '../service/useGetLocation.ts'
import Day from './Day.tsx'
import Loading from './Loading.tsx'
import Error from './Error.tsx'
import styled from '@emotion/styled'

const Forecast = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%'
})

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('')
  const getWeather = useGetWeather()
  const getLocation = useGetLocation()
  const handleClick = (e) => {
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
      <button onClick={(e) => handleClick(e)}> Search weather </button>
      {getWeather.loading && <Loading />}
      {getWeather.error && <Error />}
      <Forecast>
        {getWeather.data?.daily.time.map((time, index) => {
          return <Day key={time} currentWeather={getWeather.data.daily} index={index} />
        })}
      </Forecast>
    </div>
  )
}

export default Weather
