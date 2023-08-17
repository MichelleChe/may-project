/// <reference types="vite/client" />

// 自定义的环境变量
interface ImportMetaEnv {
  readonly VITE_APP_BASEURL: string;
  readonly VITE_MODE: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}