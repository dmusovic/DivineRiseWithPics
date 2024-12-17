import * as React from 'react';
import { Course } from '../../../types';
import { getCourseTheme } from '../../../utils/themeUtils';

interface CourseCardContainerProps {
  course: Course;
  onSelect: (course: Course) => void;
  children: React.ReactNode;
}

export function CourseCardContainer({ course, onSelect, children }: CourseCardContainerProps) {
  const theme = getCourseTheme(course);
  
  return (
    <stackLayout
      className={`rounded-lg overflow-hidden shadow-lg mx-2 w-64 ${theme.containerClass}`}
      onTap={() => onSelect(course)}
    >
      {children}
    </stackLayout>
  );
}