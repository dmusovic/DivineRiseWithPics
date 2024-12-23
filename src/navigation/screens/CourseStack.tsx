import * as React from "react";
import { Frame, StackLayout, Label } from "@nativescript/core";  // Ensure this is correct!
import { ActionBarComponent } from "../components/ActionBarComponent";  // Check this path too

export const CourseStack = ({ navigation }: any) => {
  return (
    <Frame>
      <ActionBarComponent
        title="Course Stack"
        canGoBack={navigation.canGoBack()}  // Make sure this is a valid check
        onBackPress={() => navigation.goBack()}  // Go back action
      />
      <StackLayout>
        <Label text="Welcome to the Course Stack!" />
      </StackLayout>
    </Frame>
  );
};