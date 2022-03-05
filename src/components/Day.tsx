import React from 'react'
import { CurrentWeather } from '../types'
import iconMapping from '../utils/iconMapping'
import styled from '@emotion/styled'
import dayOfWeek from '../utils/dayOfWeek'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  margin: '20px',
  alignItems: 'center',
  maxWidth: '100%'
})
const DayOfWeek = styled.h2()
const TemperatureContainer = styled.div({
  display: 'flex',
  flexDirection: 'row'
})
const temperature = {
  margin: '3px',
  fontSize: '14px'
}
const Max = styled.div({
  ...temperature,
  fontWeight: 'bold'
})
const Min = styled.div({
  ...temperature
})

type Props = {
  currentWeather: CurrentWeather['daily']
  index: number
}

const Day: React.FC<Props> = ({ currentWeather, index }: Props) => {
  const iconType = currentWeather.weathercode[index]
  const icon = iconMapping(iconType)

  return (
    <Container>
      <DayOfWeek>{dayOfWeek(currentWeather.time[index])}</DayOfWeek>
      <img src={icon.image} alt={icon.name} />
      <TemperatureContainer>
        <Max>{currentWeather.temperature_2m_max[index]}&deg;</Max>
        <Min>{currentWeather.temperature_2m_min[index]}&deg;</Min>
      </TemperatureContainer>
    </Container>
  )
}

export default Day
