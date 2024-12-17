import { Course } from '../types';

export interface CourseCategory {
  id: string;
  title: string;
  filter: (course: Course) => boolean;
}

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'spiritual',
    title: 'Spiritual Development',
    filter: (course) => course.id.startsWith('spiritual-')
  },
  {
    id: 'psychological',
    title: 'Psychological Growth',
    filter: (course) => course.id.startsWith('psych-')
  },
  {
    id: 'universal',
    title: 'Universal Laws',
    filter: (course) => course.id.startsWith('univ-')
  }
];

export const categorizedCourses = (courses: Course[]) => {
  const categorized = COURSE_CATEGORIES.reduce((acc, category) => ({
    ...acc,
    [category.id]: courses.filter(category.filter)
  }), {} as Record<string, Course[]>);

  // Debug logging to check categorization
  console.log('Categorized courses:', 
    Object.entries(categorized).map(([key, value]) => 
      `${key}: ${value.length} courses`
    )
  );

  return categorized;
};