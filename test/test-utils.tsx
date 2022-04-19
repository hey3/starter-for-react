import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { FC, ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const AllTheProviders: FC<Props> = ({ children }) => {
  // Add Custom Providers like a Theme Provider.
  return <>{children}</>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
