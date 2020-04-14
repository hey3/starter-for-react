export type ColorTheme = {
  BACKGROUND: string
  BASE: string
  BORDER: string
  TEXT_MAIN: string
  TEXT_SUB: string
  TEXT_DISABLE: string
  TEXT_LINK: string
  WORN: string
  DANGER: string
  PRIMARY: string
  SECONDARY: string
}

export const baseLight: ColorTheme = {
  BACKGROUND: '#ffffff',
  BASE: '#efeff4',
  BORDER: '#000000',
  TEXT_MAIN: '#111215',
  TEXT_SUB: '#313134',
  TEXT_DISABLE: '#767D92',
  TEXT_LINK: '#007bc2',
  WORN: '#fba22f',
  DANGER: '#f54d36',
  PRIMARY: '#36b5f5',
  SECONDARY: '#7036f5',
}

export const baseDark: ColorTheme = {
  BACKGROUND: '#222639',
  BASE: '#1b2440',
  BORDER: '#737475',
  TEXT_MAIN: '#ffffff',
  TEXT_SUB: '#b2b3b6',
  TEXT_DISABLE: '#3d3d40',
  TEXT_LINK: '#011e81',
  WORN: '#fba22f',
  DANGER: '#f54d36',
  PRIMARY: '#4bb2f9',
  SECONDARY: '#2d16a9',
}
