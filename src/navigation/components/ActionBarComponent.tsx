import React, { useEffect } from "react";
import { ActionBar, NavigationButton, isAndroid } from "@nativescript/core";

interface ActionBarComponentProps {
  title: string;
  canGoBack?: boolean;
  onBackPress?: () => void;
}

export const ActionBarComponent: React.FC<ActionBarComponentProps> = ({
  title,
  canGoBack = false,
  onBackPress,
}) => {
  useEffect(() => {
    const currentPage = globalThis.page; // Ensure `globalThis.page` is correctly defined
    const actionBar = new ActionBar();
    actionBar.title = title;

    if (canGoBack && onBackPress) {
      const backButton = new NavigationButton();
      backButton.icon = "res://ic_menu_back";
      backButton.on("tap", onBackPress);

      if (isAndroid) {
        backButton.android.systemIcon = "ic_menu_back";
      } else {
        backButton.text = "Back";
      }

      actionBar.navigationButton = backButton;
    }

    if (currentPage) {
      currentPage.actionBar = actionBar;
    }

    return () => {
      if (currentPage && currentPage.actionBar === actionBar) {
        currentPage.actionBar = null as unknown as ActionBar; // Type assertion to satisfy the type checker
      }
    };
  }, [title, canGoBack, onBackPress]);

  return null;
};