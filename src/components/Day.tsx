import React from 'react'

type Props = {
  currentWeather: object,
  index: number
}
const Day:React.FC<Props> = ({currentWeather, index}:Props) => {

  return (
    <>
      <div>date: {currentWeather.time[index]}</div>
      <div>max: {currentWeather.temperature_2m_max[index]}</div>
      <div>min: {currentWeather.temperature_2m_min[index]}</div>
    </>
  )

}

export default Day
