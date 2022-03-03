import React, { useState } from 'react'
import { TemperatureUnit } from '../types.ts'
import { UseGetLocation } from '../service/useGetLocation'
import styled from '@emotion/styled'

const Form = styled.form({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline'
})
const Label = styled.label({
  fontSize: '14px',
  margin: '20px'
})

const CityInput = styled.input({
  display: 'block'
})

const SelectUnit = styled.select({
  display: 'block'
})
const SubmitInput = styled.input({
  height: '35px',
  alignSelf: 'center'
})

type Props = {
  getLocation: UseGetLocation,
  temperatureUnit: typeof TemperatureUnit,
  setTemperatureUnit: (unit: typeof TemperatureUnit) => void
}

const LocationSearch: React.FC<Props> = ({getLocation, temperatureUnit, setTemperatureUnit}:Props) => {
  const [city, setCity] = useState<string>('')
  const handleSubmit = (e) => {
    e.preventDefault()
    getLocation.getLocation(city)
  }
  return(
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Label>
        Location (city)
        <CityInput type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </Label>
      <Label>
        Units:
        <SelectUnit value={temperatureUnit} onChange={(e) => setTemperatureUnit(e.target.value)}>
          <option value={TemperatureUnit.Celsius}>Metric</option>
          <option value={TemperatureUnit.Fahrenheit}>Imperial</option>
        </SelectUnit>
      </Label>
      <SubmitInput type="submit" value="Search weather" />
    </Form>
  )
}

export default LocationSearch
