import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { createGlobalStyle } from 'styled-components'

import { ThemeProvider } from '@themes/ThemeProvider'

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'hey3 starter-for-react storybook',
      brandUrl: 'https://github.com/hey3/starter-for-react',
    }),
  },
  viewport: { viewports: INITIAL_VIEWPORTS },
})

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(addReadme)
addDecorator((Story) => (
  <ThemeProvider>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
))

const GlobalStyle = createGlobalStyle`
  body {
    word-wrap: break-word;
    font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', 'メイリオ', sans-serif;
    background-color: ${(props) => props.theme.color.BACKGROUND};
    margin: 0;
    padding: 0;
  }
`
