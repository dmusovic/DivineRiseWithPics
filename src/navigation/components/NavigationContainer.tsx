import * as React from "react";
import { BaseNavigationContainer } from "@react-navigation/core";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { CourseStack } from "../screens/CourseStack";
import { ActionBarComponent } from "../components/ActionBarComponent";
import { defaultScreenOptions } from "../config/screenOptions";

const StackNavigator = stackNavigatorFactory();

export const NavigationContainer = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="MainStack"
      screenOptions={defaultScreenOptions}
    >
      <StackNavigator.Screen
        name="MainStack"
        component={CourseStack}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <ActionBarComponent
              title="Main Stack"
              canGoBack={navigation.canGoBack()}
              onBackPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);