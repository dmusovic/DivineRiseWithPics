import React from "react";
import { ActionBar, NavigationButton } from "@nativescript/core"; // Import from NativeScript
import { isAndroid } from "@nativescript/core"; // To check platform-specific features

interface ActionBarComponentProps {
  title: string;
  canGoBack: boolean;
  onBackPress?: () => void;
}

export const ActionBarComponent: React.FC<ActionBarComponentProps> = ({
  title,
  canGoBack,
  onBackPress,
}) => {
  // Use useEffect to initialize the ActionBar
  React.useEffect(() => {
    const actionBar = new ActionBar();
    actionBar.title = title;

    if (canGoBack && onBackPress) {
      const backButton = new NavigationButton();
      backButton.icon = isAndroid ? "res://ic_menu_back" : undefined;  // iOS icon logic here
      backButton.text = !isAndroid ? "Back" : undefined;
      backButton.on("tap", onBackPress);
      actionBar.navigationButton = backButton;
    }

    // This will run once to initialize the ActionBar
    return () => {
      // Clean up if necessary
    };
  }, [title, canGoBack, onBackPress]);

  // Return null because we're dealing with native components directly
  return null;
};