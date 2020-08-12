import { useContext } from 'react'
import { ThemeContext, ThemeContextType } from '@themes/themeContext'
import { BaseTheme } from '../themes'

export type Theme = BaseTheme
export const useTheme = (): ThemeContextType => useContext(ThemeContext)
