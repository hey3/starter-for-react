import { type Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from '../src/stores/ThemeStore'
import '../src/styles/reset.css'
import '../src/styles/global.css'

const preview: Preview = {
  decorators: [
    Story => {
      // Reset theme for each story.
      window.document.documentElement.setAttribute('data-theme', 'light')
      window.localStorage.setItem('theme', 'light')

      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      )
    },
  ],
}

export default preview
