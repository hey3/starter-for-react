export type ColorTheme = {
  BACKGROUND: string
  BASE: string
  BORDER: string
  TEXT_MAIN: string
  TEXT_SUB: string
  TEXT_DISABLE: string
  TEXT_LINK: string
  WARN: string
  DANGER: string
  PRIMARY: string
  SECONDARY: string
}

export const baseLight: ColorTheme = {
  BACKGROUND: '#ffffff',
  BASE: '#efeff4',
  BORDER: '#000000',
  TEXT_MAIN: '#1c1c1c',
  TEXT_SUB: '#737373',
  TEXT_DISABLE: '#c1c1c1',
  TEXT_LINK: '#1067ec',
  WARN: '#ff8800',
  DANGER: '#f54d36',
  PRIMARY: '#143cd1',
  SECONDARY: '#d15314',
}

export const baseDark: ColorTheme = {
  BACKGROUND: '#222639',
  BASE: '#1b2440',
  BORDER: '#737475',
  TEXT_MAIN: '#ffffff',
  TEXT_SUB: '#b9b9bb',
  TEXT_DISABLE: '#6a696d',
  TEXT_LINK: '#046fad',
  WARN: '#ea7d00',
  DANGER: '#df3406',
  PRIMARY: '#7098af',
  SECONDARY: '#af9670',
}
