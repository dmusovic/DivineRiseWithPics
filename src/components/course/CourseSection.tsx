import * as React from 'react';
import { Course } from '../../types';
import { CourseGrid } from './CourseGrid';

interface CourseSectionProps {
  title: string;
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export function CourseSection({ title, courses, onSelectCourse }: CourseSectionProps) {
  return (
    <stackLayout className="mb-8">
      <label className="text-2xl font-bold px-6 mb-4" text={title} />
      <CourseGrid courses={courses} onSelectCourse={onSelectCourse} />
    </stackLayout>
  );
}