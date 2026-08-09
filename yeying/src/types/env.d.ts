/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_YEYING_COMMUNITY_PORTAL_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
