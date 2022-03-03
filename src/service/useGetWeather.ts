import { useState } from 'react'
import axios from 'axios'

type Forecast = {
  day: string,
  temprature: string,
  wind: string
}

type CurrentWeather = {
  temprature: string,
  wind: string,
  description: string,
  forecast: Forecast[]
}

type UseGetWeather = {
  currentWeather: CurrentWeather,
  getLocation: any,
  error: boolean
}

const useGetWeather = (): UseGetWeather => {
  const [currentWeather, setCurrentWeather] = useState<string | undefined>(undefined)
  const [error, setError] = useState<boolean>(false)

  const url = 'https://goweather.herokuapp.com/weather/Melbourne'
  const getWeather = async (onSuccess: () => void) => {
    setError(null)
    try {
      await axios({ method: 'get', url }).then((response) => {
      console.log('resp', response)
        setCurrentWeather(response.data)
      })
    } catch {
      setError(true)
    } finally {
    }
  }

  return {
    currentWeather,
    getWeather,
    error
  }
}

export default useGetWeather
