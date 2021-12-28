import { ThemeProvider } from '../src/themes/ThemeProvider'

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]
