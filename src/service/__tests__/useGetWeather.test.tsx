import { renderHook, act } from '@testing-library/react-hooks'
import useGetWeather from '../useGetWeather.ts'
import axios from 'axios'

jest.mock('axios')

describe('useGetWeather', () => {
  it('should get weather', async () => {
    const mockWeather = {
      data: {
        temperature: '20'
      }
    }
    axios.get.mockResolvedValue(mockWeather)
    const { result, waitForNextUpdate } = renderHook(() => useGetWeather())

    expect(result.current.currentWeather).toBeUndefined()
    act(() => {
      result.current.getWeather()
    })

    await waitForNextUpdate({ timeout: false })

    expect(result.current.currentWeather).toEqual(mockWeather.data)
  })
})
