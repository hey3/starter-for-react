import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { ThemeProvider } from '@themes/ThemeProvider'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
  }
  body {
    word-wrap: break-word;
    font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', 'メイリオ', sans-serif;
    background-color: ${(props) => props.theme.color.BACKGROUND};
  }
`

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <BrowserRouter />
  </ThemeProvider>,
  document.getElementById('root')
)
