import '@testing-library/jest-dom'
import 'jest-styled-components'
import { FC, ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '@themes/ThemeProvider'

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
