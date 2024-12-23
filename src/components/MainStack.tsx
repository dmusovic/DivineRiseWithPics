import * as React from "react";
import { BaseNavigationContainer } from "@react-navigation/core";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { CoursesScreen } from "./screens/CoursesScreen";
import { CourseDetailsScreen } from "./screens/CourseDetailsScreen";
import { LessonViewScreen } from "./screens/LessonViewScreen";
import { ActionBarComponent as Header } from "../navigation/components/ActionBarComponent"; // Ensure correct import

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => {
  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Courses"
        screenOptions={({ navigation, route, options }: any) => ({
          headerShown: true,
          header: () => (
            <Header
              title={options.title || route.name}
              canGoBack={navigation.canGoBack()}
              onBackPress={() => navigation.goBack()}
            />
          ),
        })}
      >
        <StackNavigator.Screen
          name="Courses"
          component={CoursesScreen}
          options={{ title: "My Courses", headerLeft: () => null }}
        />
        <StackNavigator.Screen
          name="CourseDetails"
          component={CourseDetailsScreen}
          options={{ title: "Course Details" }}
        />
        <StackNavigator.Screen
          name="LessonView"
          component={LessonViewScreen}
          options={{ title: "Lesson" }}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  );
};