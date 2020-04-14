import { ColorTheme, baseDark, baseLight } from './colorTheme'
import { SizeTheme, baseSize } from './sizeTheme'
import { FrameTheme, baseFrame } from './frameTheme'

export type ColorMode = 'light' | 'dark'
export type BaseThemes = {
  color: ColorTheme
  size: SizeTheme
  frame: FrameTheme
}

const lightTheme: BaseThemes = {
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

const darkTheme: BaseThemes = {
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

export const getTheme = (colorMode: ColorMode): BaseThemes => {
  switch (colorMode) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
  }
}

declare module 'styled-components' {
  interface DefaultTheme extends BaseThemes {}
}
