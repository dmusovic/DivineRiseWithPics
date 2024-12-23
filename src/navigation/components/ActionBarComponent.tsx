import * as React from "react";
import { isAndroid } from "@nativescript/core";

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
  return (
    <actionBar title={title}>
      {canGoBack && (
        <navigationButton
          icon={isAndroid ? "res://ic_menu_back" : undefined} // Use NativeScript's resource path for Android
          text={!isAndroid ? "Back" : undefined} // iOS-only text
          onTap={onBackPress}
        />
      )}
    </actionBar>
  );
};