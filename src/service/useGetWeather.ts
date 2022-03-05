import { TemperatureUnit } from '../types'
import useService, { UseService } from './useService'

export interface UseGetWeather extends UseService {
  getWeather: (latitude: string, longitude: string, temperatureUnit: TemperatureUnit) => void
}

const useGetWeather = ():UseGetWeather => {
  const service = useService()
  const getWeather = (latitude: string, longitude: string, temperatureUnit: string) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=${temperatureUnit}&timezone=Australia%2FSydney`

    service.getData(url)
  }

  return {...service, getWeather }
}

export default useGetWeather
