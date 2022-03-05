import { renderHook, act } from '@testing-library/react-hooks'
import useGetWeather from '../useGetWeather'
import { TemperatureUnit } from '../../types'
import axios from 'axios'

jest.mock('axios')

describe('useGetWeather', () => {
  it('should call getService with correct url', async () => {
    const mockWeather = {
      data: {
        temperature: '20'
      }
    }
    axios.get.mockResolvedValue(mockWeather)
    const { result, waitForNextUpdate } = renderHook(() => useGetWeather())
    expect(result.current.data).toBeUndefined()
    
  act(() => {
      result.current.getWeather(123,456,TemperatureUnit.Celsius)
    })

    await waitForNextUpdate()

    expect(result.current.data).toEqual(mockWeather.data)
    expect(axios.get.mock.lastCall[0]).toEqual('https://api.open-meteo.com/v1/forecast?latitude=123&longitude=456&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=celsius&timezone=Australia%2FSydney'
    )
  })
})
