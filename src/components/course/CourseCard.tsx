import * as React from 'react';
import { Course } from '../../types';
import { CourseCardContainer } from './card/CourseCardContainer';
import { CourseCardHeader } from './card/CourseCardHeader';
import { CourseCardContent } from './card/CourseCardContent';
import { CourseCardFooter } from './card/CourseCardFooter';
import { getCourseTheme } from '../../utils/themeUtils';
import { calculateCourseProgress } from '../../utils/progressUtils';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export function CourseCard({ course, onSelect }: CourseCardProps) {
  const theme = getCourseTheme(course);
  const progress = calculateCourseProgress(course);
  
  return (
    <CourseCardContainer course={course} onSelect={onSelect}>
      <CourseCardHeader
        imageUrl={course.thumbnail}
        alt={course.title}
      />
      <CourseCardContent
        title={course.title}
        description={course.description}
      />
      <CourseCardFooter
        progress={progress}
        theme={theme}
      />
    </CourseCardContainer>
  );
}