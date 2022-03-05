export type CurrentWeather = {
  latitude: number
  longitude: number
  daily_units: {
    temperature_2m_max: string
    temperature_2m_min: string
    time: string
  }
  generationtime_ms: number
  daily: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    utc_offset_seconds: number
    weathercode: number[]
  }
}

export enum TemperatureUnit {
  Celsius = 'celsius',
  Fahrenheit = 'fahrenheit'
}
