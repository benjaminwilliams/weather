import { useState } from 'react'
import axios from 'axios'

type Forecast = {
  day: string
  temprature: string
  wind: string
}

type CurrentWeather = {
  daily: {
    time: string[]
  }
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

  const formatData = (data) => {
    return data
  }

  const url = 'https://api.open-meteo.com/v1/forecast?latitude=-35.2820&longitude=149.1286&daily=temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney'
  const getWeather = async (onSuccess: () => void) => {
    reset()
    try {
      setLoading(true)
      await axios.get(url).then((response) => {
        const formatedData = formatData(response.data)
        setCurrentWeather(formatedData)
        setSuccess(true)
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
