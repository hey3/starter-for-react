import { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle``

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
