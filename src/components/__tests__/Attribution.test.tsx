import React, { render, screen } from '@testing-library/react'
import Attribution from '../Attribution'

test('renders attribution component', () => {
  render(<Attribution />)
  const text = screen.getByText('icons by')
  expect(text).toBeInTheDocument()
})
