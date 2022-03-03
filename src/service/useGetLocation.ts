import useService from './useService.ts'

export interface UseGetLocation extends UseService {
  getLocation: (name: string) => void
}

const useGetLocation = ():UseGetService => {
  const service = useService()
  const getLocation = (name) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}`
    service.getData(url)
  }
  return {...service, getLocation}
}

export default useGetLocation
