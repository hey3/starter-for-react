import * as React from 'react'

import { ColorMode } from './themes'

interface ThemeContextType {
  colorMode: ColorMode
  setColorMode: () => void
}

const defaultContext: ThemeContextType = {
  colorMode: 'light',
  setColorMode: () => console.log('changed color mode'),
}

export const ThemeContext = React.createContext<ThemeContextType>(defaultContext)
export const useTheme = () => React.useContext(ThemeContext)
