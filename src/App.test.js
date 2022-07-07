import { render, screen } from '@testing-library/react'
import App from './App'

it('test case for checking presence of sidenav bar', () => {
  render(<App />)
  const folder1 = screen.getByText(/folder1/i)
})
