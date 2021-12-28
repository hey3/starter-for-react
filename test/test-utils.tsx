import '@testing-library/jest-dom'
import { render, type RenderOptions, type RenderResult } from '@testing-library/react'
import 'jest-styled-components'
import { FC, ReactElement } from 'react'
import { ThemeProvider } from '../src/themes/ThemeProvider'

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
