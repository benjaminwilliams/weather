import React, { useState, useEffect } from 'react'
import useGetWeather from '../service/useGetWeather.ts'
import useGetLocation from '../service/useGetLocation.ts'
import Day from './Day.tsx'
import Loading from './Loading.tsx'
import Error from './Error.tsx'
import styled from '@emotion/styled'

enum TemperatureUnit {
  Celsius = 'celsius',
  Fahrenheit = 'fahrenheit'
}

const Forecast = styled.div({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '100%'
})

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('')
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(
    TemperatureUnit.Celsius
  )
  const getWeather = useGetWeather()
  const getLocation = useGetLocation()
  const handleSubmit = (e) => {
    e.preventDefault()
    getLocation.getLocation(city)
  }
  useEffect(() => {
    if (getLocation.data?.results) {
      // use the first result, it should be the best result
      const latitude = getLocation.data.results[0].latitude
      const longitude = getLocation.data.results[0].longitude
      getWeather.getWeather(latitude, longitude, temperatureUnit)
    }
  }, [getLocation.data])
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Location (city)
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        Units:
        <select value={temperatureUnit} onChange={(e) => setTemperatureUnit(e.target.value)}>
          <option value={TemperatureUnit.Celsius}>Metric</option>
          <option value={TemperatureUnit.Fahrenheit}>Imperial</option>
        </select>
      </label>
      <input type="submit" value="Search weather" />
    </form>
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
