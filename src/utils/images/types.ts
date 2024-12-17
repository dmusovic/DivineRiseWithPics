export type CategoryKey = 'meditation' | 'manifestation' | 'spiritual' | 'healing' | 'psychology' | 'wisdom' | 'vedic';

export interface ImageMapping {
  courseId: string;
  category: CategoryKey;
  description: string;
}

export interface LessonMapping {
  lessonId: string;
  category: CategoryKey;
  description: string;
}