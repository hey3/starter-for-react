import React, { useState } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

import { ColorMode, getTheme } from './index'
import { ThemeContext } from './themeContext'

const { Provider } = ThemeContext

const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light')

  function toggleColorMode() {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }
  return (
    <StyledProvider theme={getTheme(colorMode)}>
      <Provider
        value={{
          colorMode,
          setColorMode: toggleColorMode,
        }}
      >
        {children}
      </Provider>
    </StyledProvider>
  )
}

export default ThemeProvider
