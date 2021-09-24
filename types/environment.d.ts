declare namespace NodeJS {
  interface ProcessEnv {
    readonly BUILD_MODE: 'development' | 'production'
    readonly REACT_APP_ENV: 'local' | 'development' | 'staging' | 'production'
  }
}
