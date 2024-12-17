import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { CoursesScreen } from "./screens/CoursesScreen";
import { CourseDetailsScreen } from "./screens/CourseDetailsScreen";
import { LessonViewScreen } from "./screens/LessonViewScreen";
import { ActionBar, NavigationButton, isAndroid } from "@nativescript/core";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => {
  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Courses"
        screenOptions={({ navigation, route }) => ({
          headerShown: true,
          header: ({ options }) => (
            <actionBar
              title={options.title || route.name}
              className="bg-blue-500"
              flat={true}
            >
              {navigation.canGoBack() && (
                <navigationButton
                  text={isAndroid ? "" : "Back"}
                  android={{ systemIcon: "ic_menu_back" }}
                  ios={{ systemIcon: 0 }}
                />
              )}
            </actionBar>
          )
        })}
      >
        <StackNavigator.Screen
          name="Courses"
          component={CoursesScreen}
          options={{
            title: "My Courses",
            headerLeft: () => null
          }}
        />
        <StackNavigator.Screen
          name="CourseDetails"
          component={CourseDetailsScreen}
          options={({ route }) => ({
            title: "Course Details"
          })}
        />
        <StackNavigator.Screen
          name="LessonView"
          component={LessonViewScreen}
          options={({ route }) => ({
            title: "Lesson"
          })}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  );
};