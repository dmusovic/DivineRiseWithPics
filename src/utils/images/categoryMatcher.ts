import { CategoryKey } from './types';
import { COURSE_MAPPINGS, LESSON_MAPPINGS } from './mappings';

export const getImageCategory = (courseId: string, lessonId?: string): CategoryKey => {
  // First check for specific lesson override if lessonId is provided
  if (lessonId) {
    const lessonMapping = LESSON_MAPPINGS.find(mapping => mapping.lessonId === lessonId);
    if (lessonMapping) {
      return lessonMapping.category;
    }
  }
  
  // Then check for course mapping
  const courseMapping = COURSE_MAPPINGS.find(mapping => mapping.courseId === courseId);
  if (courseMapping) {
    return courseMapping.category;
  }
  
  console.warn(`No category mapping found for course: ${courseId}${lessonId ? `, lesson: ${lessonId}` : ''}`);
  return 'wisdom';
};