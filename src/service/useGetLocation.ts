import useService, {UseService} from './useService'

export interface UseGetLocation extends UseService {
  getLocation: (name: string) => void
}

const useGetLocation = ():UseGetLocation => {
  const service = useService()
  const getLocation = (name:string) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}`
    service.getData(url)
  }
  return {...service, getLocation}
}

export default useGetLocation
