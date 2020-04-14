import { ColorTheme, baseDark, baseLight } from './colorTheme'
import { SizeTheme, baseSize } from './sizeTheme'
import { FrameTheme, baseFrame } from './frameTheme'

export type ColorMode = 'light' | 'dark'
type Themes = {
  color: ColorTheme
  size: SizeTheme
  frame: FrameTheme
}

const lightTheme: Themes = {
  color: baseLight,
  size: baseSize,
  frame: {
    ...baseFrame,
    border: {
      ...baseFrame.border,
      color: baseLight.BORDER,
    },
  },
}

const darkTheme: Themes = {
  color: baseDark,
  size: baseSize,
  frame: {
    ...baseFrame,
    border: {
      ...baseFrame.border,
      color: baseDark.BORDER,
    },
  },
}

export const getTheme = (colorMode: ColorMode): Themes => {
  switch (colorMode) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
  }
}

declare module 'styled-components' {
  interface DefaultTheme extends Themes {}
}
