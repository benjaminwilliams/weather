import { useState } from 'react'
import axios from 'axios'

type Forecast = {
  day: string
  temprature: string
  wind: string
}

type CurrentWeather = {
  temprature: string
  wind: string
  description: string
  forecast: Forecast[]
}

type UseGetWeather = {
  currentWeather: CurrentWeather
  getLocation: any
  error: boolean
}

const useGetWeather = (): UseGetWeather => {
  const [currentWeather, setCurrentWeather] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const reset = () => {
    setLoading(false)
    setSuccess(false)
    setError(false)
  }

  const url = 'https://goweather.herokuapp.com/weather/Melbourne'
  const getWeather = async (onSuccess: () => void) => {
    reset()
    try {
      setLoading(true)
      await axios.get(url).then((response) => {
        setSuccess(true)
        setCurrentWeather(response.data)
      })
    } catch(error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return {
    currentWeather,
    getWeather,
    error,
    success,
    loading
  }
}

export default useGetWeather
