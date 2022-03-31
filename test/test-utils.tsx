import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { FC, ReactElement } from 'react'

const AllTheProviders: FC = ({ children }) => {
  // Add Custom Provides like a Theme Provider.
  return <>{children}</>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
