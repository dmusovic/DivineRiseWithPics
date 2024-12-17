import * as React from "react";
import { ActionBar, NavigationButton, isAndroid } from "@nativescript/core";

interface ActionBarComponentProps {
  title: string;
  canGoBack: boolean;
}

export const ActionBarComponent = ({ title, canGoBack }: ActionBarComponentProps) => {
  return (
    <actionBar
      title={title}
      className="bg-blue-500"
      flat={true}
      android={{ systemIcon: canGoBack ? "ic_menu_back" : undefined }}
      ios={{ systemIcon: canGoBack ? 0 : undefined }}
    >
      {canGoBack && (
        <navigationButton
          text={isAndroid ? "" : "Back"}
          android={{ systemIcon: "ic_menu_back" }}
          ios={{ systemIcon: 0 }}
        />
      )}
    </actionBar>
  );
};