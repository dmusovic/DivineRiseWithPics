import React from 'react';
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from 'react-nativescript-navigation';
import { CourseStack } from 'src/navigation/screens/CourseStack';

const StackNavigator = stackNavigatorFactory();

export const NavigationContainer = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        headerShown: true, // Ensures headers are displayed
      }}
    >
      <StackNavigator.Screen
        name="MainStack"
        component={CourseStack}
        options={{
          title: 'Main Stack',
        }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);