// src/globals.d.ts
export {};

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}
