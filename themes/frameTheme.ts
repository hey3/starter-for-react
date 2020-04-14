export type FrameTheme = {
  border: {
    width: string
    type: string
    color: string
    radius: {
      XS: string
      S: string
      M: string
      L: string
      XL: string
    }
  }
}

export const baseFrame: FrameTheme = {
  border: {
    width: '1px',
    type: 'solid',
    color: '#000',
    radius: {
      XS: '1px',
      S: '3px',
      M: '6px',
      L: '8px',
      XL: '10px',
    },
  },
}
