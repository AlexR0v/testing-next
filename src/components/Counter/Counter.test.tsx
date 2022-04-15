import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter component', () => {
  beforeEach(() => {
    render(<Counter defaultCount={0} defaultDescription='Test' />)
  })

  test('default counter', () => {
    expect(screen.getByText('Current count: 0')).toBeInTheDocument()
    expect(screen.getByText('Desc: Test - DC: 0')).toBeInTheDocument()
  })

  test('increment counter', () => {
    expect(screen.getByText('Current count: 0')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    expect(screen.getByText('Current count: 1')).toBeInTheDocument()
  })

  test('decrement counter', () => {
    expect(screen.getByText('Current count: 0')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '-' }))
    expect(screen.getByText('Current count: -1')).toBeInTheDocument()
  })

  test('increment count on 5 count', async () => {
    await userEvent.type(screen.getByLabelText(/incrementor/i), '5')
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    expect(screen.getByText('Current count: 15')).toBeInTheDocument()
  })

  test('decrement count on 5 count', async () => {
    await userEvent.type(screen.getByRole('spinbutton'), '5')
    fireEvent.click(screen.getByRole('button', { name: '-' }))
    expect(screen.getByText('Current count: -15')).toBeInTheDocument()
  })
})
