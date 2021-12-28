import { BaseTheme } from '../src/themes'

declare module 'styled-components' {
  interface DefaultTheme extends BaseTheme {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
