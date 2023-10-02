import { render } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import type { FC, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from '../src/stores/ThemeStore'

type Props = {
  children: ReactNode
}

const AllTheProviders: FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { userEvent } from '@testing-library/user-event'
export { customRender as render }
