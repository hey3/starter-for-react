import { baseDark, baseLight, ColorTheme } from './colorTheme'
import { baseFrame, FrameTheme } from './frameTheme'
import { baseSize, SizeTheme } from './sizeTheme'

export type ColorMode = 'light' | 'dark'
export type BaseTheme = {
  color: ColorTheme
  size: SizeTheme
  frame: FrameTheme
}

const lightTheme: BaseTheme = {
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

const darkTheme: BaseTheme = {
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

export const getTheme = (colorMode: ColorMode): BaseTheme => {
  switch (colorMode) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
  }
}
