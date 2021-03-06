import { render, screen } from '@testing-library/react'
import Hello from './Hello'

test('render hello', () => {
  render(<Hello />)
  const element = screen.getByText(/hello/i)
  expect(element).toBeInTheDocument()
})
