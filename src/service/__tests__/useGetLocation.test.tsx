import { renderHook, act } from '@testing-library/react-hooks'
import useGetLocation from '../useGetLocation'
import axios from 'axios'

jest.mock('axios')

describe('useGetLocation', () => {
  it('should call getService with correct url', async () => {
    const mockWeather = {
      data: {
        temperature: '20'
      }
    }
    axios.get.mockResolvedValue(mockWeather)
    const { result, waitForNextUpdate } = renderHook(() => useGetLocation())
    expect(result.current.data).toBeUndefined()

    act(() => {
      result.current.getLocation('abcdefg')
    })

    await waitForNextUpdate()

    expect(result.current.data).toEqual(mockWeather.data)
    expect(axios.get.mock.lastCall[0]).toEqual(
      'https://geocoding-api.open-meteo.com/v1/search?name=abcdefg'
    )
  })
})
