import React, { useState, useEffect } from 'react'
import useGetWeather from '../service/useGetWeather'
import useGetLocation from '../service/useGetLocation'
import Day from './Day'
import Loading from './Loading'
import Error from './Error'
import styled from '@emotion/styled'
import LocationSearch from './LocationSearch'
import { TemperatureUnit } from '../types'
import NoResults from './NoResults'
import breakpoints from '../styles/breakPoints'

const City = styled.h2({
  margin: '40px 20px 20px 20px'
})

const Forecast = styled.div({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '100%',
  flexWrap: 'wrap',
  margin: '0',
  [breakpoints.small]: {
    margin: '0 15px'
  }
})

const Weather: React.FC = () => {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(TemperatureUnit.Celsius)
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
  const hasResults = !(
    getLocation.data?.generationtime_ms && getLocation.data?.results === undefined
  )
  return (
    <div>
      <LocationSearch
        getLocation={getLocation}
        temperatureUnit={temperatureUnit}
        setTemperatureUnit={setTemperatureUnit}
      />
      {isError && <Error />}
      {!hasResults && <NoResults />}
      <City>{getLocation.data?.results && getLocation.data?.results[0].name}</City>
      {isLoading && <Loading />}
      {hasResults && (
        <Forecast>
          {getWeather.data?.daily.time.map((time: string, index: number) => {
            return <Day key={time} currentWeather={getWeather.data.daily} index={index} />
          })}
        </Forecast>
      )}
    </div>
  )
}

export default Weather
