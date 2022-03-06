import React from 'react'
import { CurrentWeather } from '../types'
import iconMapping from '../utils/iconMapping'
import styled from '@emotion/styled'
import dayOfWeek from '../utils/dayOfWeek'
import breakpoints from '../styles/breakPoints'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  margin: '5px 20px',
  padding: '15px',
  alignItems: 'center',
  minWidth: '140px',
  border: '1px solid #eee',
  width: '100%',
  [breakpoints.small]: {
    width: 'inherit',
    margin: '5px'
  }
})
const DayOfWeek = styled.h3()
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
