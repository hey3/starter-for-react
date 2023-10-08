import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

type ThemeContext = {
  activeTheme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContext | null>(null)

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [activeTheme, setActiveTheme] = useState<Theme>(
    window.document.documentElement.getAttribute('data-theme') as Theme
  )

  useLayoutEffect(() => {
    let theme: Theme
    const savedTheme = window.localStorage.getItem('theme') as Theme
    if (savedTheme) {
      theme = savedTheme
    } else {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    setActiveTheme(theme)
    window.document.documentElement.setAttribute('data-theme', theme)
  }, [])

  const inactiveTheme: Theme = activeTheme === 'light' ? 'dark' : 'light'

  const toggleTheme = useCallback(() => {
    setActiveTheme(inactiveTheme)
  }, [inactiveTheme])

  useEffect(() => {
    if (activeTheme) {
      window.document.documentElement.setAttribute('data-theme', activeTheme)
      window.localStorage.setItem('theme', activeTheme)
    }
  }, [activeTheme])

  const context: ThemeContext = {
    activeTheme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
}

export const useThemeStore = (): ThemeContext => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('Need to pass a value to the context')
  }

  return themeContext
}
