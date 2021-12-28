import { useContext } from 'react'
import { BaseTheme } from '../themes'
import { ThemeContext, ThemeContextType } from '../themes/themeContext'

export type Theme = BaseTheme
export const useTheme = (): ThemeContextType => useContext(ThemeContext)
