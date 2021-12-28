import { createContext } from 'react'
import { ColorMode } from '.'

export type ThemeContextType = {
  colorMode: ColorMode
  setColorMode: () => void
}

const defaultContext: ThemeContextType = {
  colorMode: 'light',
  setColorMode: () => console.log('changed color mode'),
}

export const ThemeContext = createContext<ThemeContextType>(defaultContext)
