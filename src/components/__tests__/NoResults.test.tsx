import React, { render, screen } from '@testing-library/react'
import NoResults from '../NoResults'

test('renders no results component', () => {
  render(<NoResults />)
  const errorText = screen.getByText(
    'No results found for your location. Please try another location'
  )
  expect(errorText).toBeInTheDocument()
})
