import React, { useState } from 'react'
import { TemperatureUnit } from '../types'
import { UseGetLocation } from '../service/useGetLocation'
import styled from '@emotion/styled'
import breakpoints from '../styles/breakPoints'

const Form = styled.form({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
  margin: '20px',
  padding: '30px',
  backgroundColor: '#fff6ea',
  border: '1px solid #ffe5c1'
})

const Label = styled.label({
  width: '100%',
  [breakpoints.small]: {
    width: 'inherit'
  }
})

const CityInput = styled.input({
  display: 'block',
  width: '100%',
  [breakpoints.small]: {
    width: 'inherit'
  }
})

const SelectUnit = styled.select({
  display: 'block',
  width: '100%'
})
const SubmitInput = styled.input({
  width: '100%',
  margin: '10px',
  alignSelf: 'end',
  [breakpoints.small]: {
    width: 'inherit'
  }
})

type Props = {
  getLocation: UseGetLocation
  temperatureUnit: TemperatureUnit
  setTemperatureUnit: (unit: TemperatureUnit) => void
}

const LocationSearch: React.FC<Props> = ({
  getLocation,
  temperatureUnit,
  setTemperatureUnit
}: Props) => {
  const [city, setCity] = useState<string>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getLocation.getLocation(city)
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Label>
        Location (city)
        <CityInput type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </Label>
      <Label>
        Units:
        <SelectUnit
          value={temperatureUnit}
          onChange={(e) => setTemperatureUnit(e.target.value as TemperatureUnit)}
        >
          <option value={TemperatureUnit.Celsius}>Metric</option>
          <option value={TemperatureUnit.Fahrenheit}>Imperial</option>
        </SelectUnit>
      </Label>
      <SubmitInput type="submit" value="Search weather" />
    </Form>
  )
}

export default LocationSearch
