import { spiritualCourses } from './spiritual';
import { psychologicalCourses } from './psychological';
import { universalCourses } from './universal';
import { Course } from '../../types';

export const allCourses: Course[] = [
  ...spiritualCourses,
  ...psychologicalCourses,
  ...universalCourses
];