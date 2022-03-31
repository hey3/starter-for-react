interface ImportMetaEnv {
  // define custom env variables
  readonly VITE_XXX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
