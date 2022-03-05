import React, { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LocationSearch from '../LocationSearch'
import useGetLocation from '../../service/useGetLocation'
import { TemperatureUnit } from '../../types'

const getLocationInHook = jest.fn()
let component

beforeEach(() => {
  const useGetLocation = jest.fn(() => {
    return { getLocation: getLocationInHook }
  })
  const getLocation = useGetLocation()
  const temperatureUnit = TemperatureUnit.Celsius
  const setTemperatureUnit = () => {}

  component = render(
    <LocationSearch
      getLocation={getLocation}
      temperatureUnit={temperatureUnit}
      setTemperatureUnit={setTemperatureUnit}
    />
  )
})

test('renderes input fields', () => {
  const cityInput = screen.getByLabelText('Location (city)')
  const temperatureUnit = screen.getByLabelText('Units:')
  expect(cityInput.value).toMatch('')
  expect(temperatureUnit.value).toMatch('celsius')
})
test('allows location field to be changed', () => {
  const cityInput = screen.getByLabelText('Location (city)')
  userEvent.type(cityInput, 'Melbourne')
  expect(cityInput.value).toMatch('Melbourne')
})
test('renderes input field options', () => {
  const temperatureUnit = screen.getByLabelText('Units:')
  expect(temperatureUnit.children[0].value).toMatch('celsius')
  expect(temperatureUnit.children[1].value).toMatch('fahrenheit')
})
test('allows Units select to be changed', () => {
  // we will be rerendering the component, with the tempertureUnit changed
  const useGetLocation = jest.fn(() => {
    return { getLocation: getLocationInHook }
  })
  const getLocation = useGetLocation()
  const temperatureUnit = TemperatureUnit.Fahrenheit
  const setTemperatureUnit = jest.fn()

  const imperial = screen.getByRole('option', { name: 'Imperial' })
  expect(imperial.selected).toBe(false)
  component.rerender(
    <LocationSearch
      getLocation={getLocation}
      temperatureUnit={temperatureUnit}
      setTemperatureUnit={setTemperatureUnit}
    />
  )
  expect(imperial.selected).toBe(true)
})

test('can submit form', () => {
  const submit = screen.getByText('Search weather')
  expect(submit).toBeInTheDocument()
  expect(getLocationInHook).not.toHaveBeenCalled()
  userEvent.click(submit)
  expect(getLocationInHook).toHaveBeenCalled()
})
