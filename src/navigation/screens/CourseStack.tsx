import React from 'react';
import { stackNavigatorFactory } from 'react-nativescript-navigation';
import { CoursesScreen } from '../../components/screens/CoursesScreen';
import { CourseDetailsScreen } from '../../components/screens/CourseDetailsScreen';
import { LessonViewScreen } from '../../components/screens/LessonViewScreen';

const StackNavigator = stackNavigatorFactory();

export const CourseStack = () => (
  <StackNavigator.Navigator
    initialRouteName="Courses"
    screenOptions={{
      headerShown: true,
    }}
  >
    <StackNavigator.Screen
      name="Courses"
      component={CoursesScreen}
      options={{
        title: 'My Courses',
      }}
    />
    <StackNavigator.Screen
      name="CourseDetails"
      component={CourseDetailsScreen}
      options={{
        title: 'Course Details',
      }}
    />
    <StackNavigator.Screen
      name="LessonView"
      component={LessonViewScreen}
      options={{
        title: 'Lesson',
      }}
    />
  </StackNavigator.Navigator>
);