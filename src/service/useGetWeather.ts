import { CurrentWeather } from '../types'
import useService from './useService.ts'

type UseGetWeather = {
  data: CurrentWeather
  getData: () => Promise<any>
  error: boolean,
  success: boolean,
  loading: boolean
  getWeather: (latitude: number, longitude: number) => Promise<any>
}

const useGetWeather = ():UseGetWeather => {
  const service = useService()
  const getWeather = (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney`

    service.getData(url)
  }

  return {...service, getWeather }
}

export default useGetWeather
