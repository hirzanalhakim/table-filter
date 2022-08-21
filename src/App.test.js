import { render, screen } from '@testing-library/react'
import App from './App'

test('will renders NotFound Project', () => {
  render(<App />)
  const exampleElement = screen.getByText(/Page Not Found/i)
  expect(exampleElement).toBeInTheDocument()
})
