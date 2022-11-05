import type { DecoratorFunction } from '@storybook/addons'
import React from 'react'
import { ThemeProvider } from '../src/stores/ThemeStore'
import '../src/styles/reset.css'
import '../src/styles/global.css'

export const decorators: DecoratorFunction<JSX.Element>[] = [
  Story => {
    // Reset theme for each story.
    window.document.documentElement.setAttribute('data-theme', 'light')
    window.localStorage.clear()

    return (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  },
]
