import { useContext } from 'react'
import { ThemeContext } from '../themes/themeContext'
import { BaseTheme } from '../themes'

export type Theme = BaseTheme
export const useTheme = () => useContext(ThemeContext)
