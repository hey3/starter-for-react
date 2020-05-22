import { BaseTheme } from '@themes/index'

declare module 'styled-components' {
  interface DefaultTheme extends BaseTheme {}
}
