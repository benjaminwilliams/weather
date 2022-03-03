import { renderHook, act } from '@testing-library/react-hooks'
import useService from '../useService.ts'
import axios from 'axios'

jest.mock('axios')

describe('useService', () => {
  it('should get weather', async () => {
    const mockWeather = {
      data: {
        temperature: '20'
      }
    }
    axios.get.mockResolvedValue(mockWeather)
    const { result, waitForNextUpdate } = renderHook(() => useService())

    expect(result.current.data).toBeUndefined()
    act(() => {
      result.current.getData()
    })

    await waitForNextUpdate({ timeout: false })

    expect(result.current.data).toEqual(mockWeather.data)
    expect(result.current.success).toEqual(true)
  })
  it('should set loading to true when waiting for response', async () => {
    const mockWeather = {
      data: {
        temperature: '20'
      }
    }
    axios.get.mockResolvedValue(mockWeather)
    const { result, waitForNextUpdate } = renderHook(() => useService())

    expect(result.current.loading).toEqual(false)
    act(() => {
      result.current.getData()
    })
    expect(result.current.loading).toEqual(true)
    await waitForNextUpdate()
    expect(result.current.loading).toEqual(false)
  })
  it('should set error to true when there is an error', async () => {
    axios.get.mockResolvedValue()
    const { result, waitForNextUpdate } = renderHook(() => useService())

    expect(result.current.error).toEqual(false)
    act(() => {
      result.current.getData()
    })
    await waitForNextUpdate()
    expect(result.current.error).toEqual(true)
  })
})
