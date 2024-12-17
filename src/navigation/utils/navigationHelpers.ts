import { Frame } from "@nativescript/core";

export const goBack = () => {
    const frame = Frame.topmost();
    if (frame?.canGoBack()) {
        frame.goBack();
        return true;
    }
    return false;
};

export const isRootFrame = () => {
    const frame = Frame.topmost();
    return !frame?.canGoBack();
};