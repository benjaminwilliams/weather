import React, { useState, useEffect } from 'react'
import useGetWeather from '../service/useGetWeather.ts'
import useGetLocation from '../service/useGetLocation.ts'
import Day from './Day.tsx'
import Loading from './Loading.tsx'
import Error from './Error.tsx'
import styled from '@emotion/styled'
import LocationSearch from './LocationSearch.tsx'
import { TemperatureUnit } from '../types.ts'

const Forecast = styled.div({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '100%',
  flexWrap: 'wrap'
})

const Weather: React.FC = () => {
  const [temperatureUnit, setTemperatureUnit] = useState<string>(
    TemperatureUnit.Celsius
  )
  const getWeather = useGetWeather()
  const getLocation = useGetLocation()
  const isLoading = getWeather.loading || getLocation.loading
  const isError = getWeather.error || getLocation.error
  useEffect(() => {
    // This needs refactoring, I shouldn't be using the view to call get location
    // it should be chained from the getLocation call.
    if (getLocation.data?.results) {
      // use the first result, it should be the best result
      const latitude = getLocation.data.results[0].latitude
      const longitude = getLocation.data.results[0].longitude
      getWeather.getWeather(latitude, longitude, temperatureUnit)
    }
  }, [getLocation.data])
  return (
    <div>
      <LocationSearch getLocation={getLocation} temperatureUnit={temperatureUnit} setTemperatureUnit={setTemperatureUnit}/>
      {isLoading && <Loading />}
      {isError && <Error />}
      {getLocation.data && <h2>{getLocation.data?.results[0].name}</h2>}
      <Forecast>
        {getWeather.data?.daily.time.map((time, index) => {
          return <Day key={time} currentWeather={getWeather.data.daily} index={index} />
        })}
      </Forecast>
    </div>
  )
}

export default Weather
