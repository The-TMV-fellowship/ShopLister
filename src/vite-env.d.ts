/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_BASE_API: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}
