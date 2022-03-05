import React, { render, screen } from '@testing-library/react'
import App from '../App'
import { act } from 'react-dom/test-utils'

test('renders weather title', () => {
  act(() => {
    render(<App />)
  })
  const header = screen.getByText('Weather')
  expect(header).toBeInTheDocument()
})
