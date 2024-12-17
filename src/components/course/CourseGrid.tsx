import * as React from 'react';
import { Course } from '../../types';
import { CourseCard } from './CourseCard';

interface CourseGridProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export function CourseGrid({ courses, onSelectCourse }: CourseGridProps) {
  return (
    <scrollView orientation="horizontal" scrollBarIndicatorVisible={false}>
      <stackLayout orientation="horizontal" className="px-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={onSelectCourse}
          />
        ))}
      </stackLayout>
    </scrollView>
  );
}