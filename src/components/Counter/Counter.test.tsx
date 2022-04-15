import { render, screen } from '@testing-library/react'
import Counter from './Counter'

describe('Counter component', () => {
  test('default counter', () => {
    render(<Counter defaultCount={0} defaultDescription='Test' />)
    const a: string = 5
    expect(screen.getByText('Current count: 0')).toBeInTheDocument()
    expect(screen.getByText('Desc: Test - DC: 0')).toBeInTheDocument()
  })
})
