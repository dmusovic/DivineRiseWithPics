import { Page } from "@nativescript/core";

declare global {
  var page: Page | undefined; // Ensure `global.page` exists and is typed
}

export {}; // Ensures the file is treated as a module