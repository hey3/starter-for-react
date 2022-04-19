import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle``

export const App: FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter />
  </>
)
