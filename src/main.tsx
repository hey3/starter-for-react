import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { ThemeProvider } from '@themes/ThemeProvider'

const GlobalStyle = createGlobalStyle`
  body {
    word-wrap: break-word;
    font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', 'メイリオ', sans-serif;
    background-color: ${props => props.theme.color.BACKGROUND};
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <BrowserRouter />
  </ThemeProvider>,
  document.getElementById('root')
)
