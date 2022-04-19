import '@testing-library/jest-dom'

// @see https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
const globalThisForTest = global as typeof globalThis & {
  IS_REACT_ACT_ENVIRONMENT: boolean
}
globalThisForTest.IS_REACT_ACT_ENVIRONMENT = true
