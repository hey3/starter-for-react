import React from 'react'

import { ThemeProvider } from '@themes/ThemeProvider'

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]
