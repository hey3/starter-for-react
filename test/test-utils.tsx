import { render } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import type { FC, ReactElement, ReactNode } from 'react'

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
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
