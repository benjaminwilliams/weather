import React, { render, screen } from '@testing-library/react'
import Error from '../Error'

test('renders error component', () => {
  render(<Error />)
  const errorText = screen.getByText('Error, please try again')
  expect(errorText).toBeInTheDocument()
})
