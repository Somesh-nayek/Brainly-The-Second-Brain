/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_API_KEY?: string; // Add any other VITE_ variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
