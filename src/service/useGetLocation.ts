import useService from './useService.ts'


const useGetLocation = ():UseGetWeather => {
  const service = useService()
  const getLocation = (name) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}`
    service.getData(url)
  }
  return {...service, getLocation}
}

export default useGetLocation
