import React, { render, screen } from '@testing-library/react'
import Day from '../Day'

beforeEach(() => {
  const mockCurrentWeather = {
    time: ['2022-01-01'],
    temperature_2m_max: [10],
    temperature_2m_min: [20],
    weathercode: [1]
  }
  render(<Day currentWeather={mockCurrentWeather} index={0} />)
})
test('renders Max temp', () => {
  const max = screen.getByText('20°')
  expect(max).toBeInTheDocument()
})
test('renders Min temp', () => {
  const min = screen.getByText('10°')
  expect(min).toBeInTheDocument()
})
test('renders day of the week', () => {
  const dayOfWeek = screen.getByText('Saturday')
  expect(dayOfWeek).toBeInTheDocument()
})
test('renders icon', () => {
  const icon = screen.getByAltText('clouds')
  expect(icon).toBeInTheDocument()
})
