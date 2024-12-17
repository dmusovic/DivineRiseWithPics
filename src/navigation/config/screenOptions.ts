import { FrameNavigationOptions } from "react-nativescript-navigation";
import { ActionBarComponent } from "../components/ActionBarComponent";
import * as React from "react";

export const defaultScreenOptions: FrameNavigationOptions = {
  headerShown: true,
  header: ({ navigation, route, options }) => {
    return React.createElement(ActionBarComponent, {
      title: options.title || route.name,
      canGoBack: navigation.canGoBack()
    });
  },
  headerStyle: {
    backgroundColor: '#65adf1'
  },
  headerTitleStyle: {
    color: '#ffffff'
  }
};