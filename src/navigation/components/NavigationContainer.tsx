import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { CourseStack } from "../screens/CourseStack";
import { defaultScreenOptions } from "../config/screenOptions";
import { stackNavigatorFactory } from "react-nativescript-navigation";

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
                options={{ headerShown: false }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);