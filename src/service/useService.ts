import { useState } from 'react'
import axios from 'axios'

type UseService = {
  data: any
  getData: () => Promise<any>
  error: boolean
  success: boolean
  loading: boolean
}

const useService = (): UseService => {
  const [data, setData] = useState<any>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const reset = () => {
    setLoading(false)
    setSuccess(false)
    setError(false)
    setData(undefined)
  }

  const getData = async (url) => {
    reset()
    try {
      setLoading(true)
      await axios.get(url).then((response) => {
        setData(response.data)
        setSuccess(true)
      })
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    getData,
    error,
    success,
    loading
  }
}

export default useService
