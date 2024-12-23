import * as React from "react";
import { ActionBarComponent } from "../components/ActionBarComponent";

export const CourseStack = ({ navigation }: any) => {
  return (
    <frame>
      <ActionBarComponent
        title="Course Stack"
        canGoBack={navigation.canGoBack()}
        onBackPress={() => navigation.goBack()}
      />
      <stackLayout>
        <label text="Welcome to the Course Stack!" />
      </stackLayout>
    </frame>
  );
};