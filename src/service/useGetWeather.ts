import { CurrentWeather } from '../types'
import useService from './useService.ts'

type UseGetWeather = {
  data: CurrentWeather
  getData: () => Promise<any>
  error: boolean,
  success: boolean,
  loading: boolean
}

const useGetWeather = ():UseGetWeather => {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=-35.2820&longitude=149.1286&daily=temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney'
  return useService(url)
}

export default useGetWeather
