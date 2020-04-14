const htmlFontSize = 16
const defaultSpaceSize = 8

export type SizeTheme = {
  px2rem: (value: number) => string
  font: {
    XXS: number
    XS: number
    S: number
    M: number
    L: number
    XL: number
    XXL: number
  }
  space: {
    XXS: number
    XS: number
    S: number
    M: number
    L: number
    XL: number
    XXL: number
  }
}

export const baseSize: SizeTheme = {
  px2rem: (value: number) => px2rem(value)(htmlFontSize),
  font: {
    XXS: htmlFontSize * 0.25,
    XS: htmlFontSize * 0.5,
    S: htmlFontSize * 0.75,
    M: htmlFontSize,
    L: htmlFontSize * 1.5,
    XL: htmlFontSize * 1.75,
    XXL: htmlFontSize * 2,
  },
  space: {
    XXS: defaultSpaceSize,
    XS: defaultSpaceSize * 2,
    S: defaultSpaceSize * 3,
    M: defaultSpaceSize * 4,
    L: defaultSpaceSize * 5,
    XL: defaultSpaceSize * 6,
    XXL: defaultSpaceSize * 7,
  },
}

const px2rem = (value: number) => (font: number) => `${value / font}rem`
