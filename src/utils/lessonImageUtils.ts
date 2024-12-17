import { Lesson } from '../types';
import { getImageCategory } from './images/categoryMatcher';
import { getImageFromCategory, getOptimizedImageUrl } from './images/imageLoader';
import { IMAGE_CATEGORIES } from './images/categories';

export const getLessonImage = (lesson: Lesson): string => {
  try {
    // Extract course ID and lesson number
    const [courseType, courseNum, lessonNum] = lesson.id.split('-');
    const courseId = `${courseType}-${courseNum}`;
    
    // Get appropriate category
    const category = getImageCategory(courseId, lesson.id);
    
    // Get image from category based on lesson number
    const lessonIndex = parseInt(lessonNum, 10) - 1;
    const baseUrl = getImageFromCategory(category, lessonIndex);
    
    if (!baseUrl) {
      console.warn(`Falling back to default image for lesson: ${lesson.id}`);
      return getOptimizedImageUrl(IMAGE_CATEGORIES.wisdom[0]);
    }
    
    return getOptimizedImageUrl(baseUrl);
  } catch (error) {
    console.error(`Error getting image for lesson: ${lesson.id}`, error);
    return getOptimizedImageUrl(IMAGE_CATEGORIES.wisdom[0]);
  }
};