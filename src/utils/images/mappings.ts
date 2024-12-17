import { CategoryKey, ImageMapping, LessonMapping } from './types';

export const COURSE_MAPPINGS: ImageMapping[] = [
  // Spiritual courses
  { courseId: 'spiritual-1', category: 'vedic', description: 'Vedic Switch Words' },
  { courseId: 'spiritual-2', category: 'spiritual', description: 'Spiritual Awakening' },
  { courseId: 'spiritual-3', category: 'wisdom', description: 'Sacred Geometry' },
  { courseId: 'spiritual-4', category: 'healing', description: 'Energy Healing' },
  { courseId: 'spiritual-5', category: 'spiritual', description: 'Divine Connection' },
  
  // Psychological courses
  { courseId: 'psych-1', category: 'psychology', description: 'Taking Control' },
  { courseId: 'psych-2', category: 'psychology', description: 'Emotional Intelligence' },
  { courseId: 'psych-3', category: 'psychology', description: 'Shadow Work' },
  { courseId: 'psych-4', category: 'healing', description: 'Inner Child Healing' },
  { courseId: 'psych-5', category: 'psychology', description: 'Cognitive Restructuring' },
  
  // Universal courses
  { courseId: 'univ-1', category: 'wisdom', description: '12 Universal Laws' },
  { courseId: 'univ-2', category: 'manifestation', description: 'Quantum Manifestation' },
  { courseId: 'univ-3', category: 'wisdom', description: 'Sacred Mathematics' },
  { courseId: 'univ-4', category: 'meditation', description: 'Cosmic Cycles' },
  { courseId: 'univ-5', category: 'wisdom', description: 'Hermetic Principles' }
];

export const LESSON_MAPPINGS: LessonMapping[] = [
  // Vedic Switch Words lessons
  { lessonId: 'spiritual-1-2', category: 'manifestation', description: 'Basic Switch Words' },
  { lessonId: 'spiritual-1-3', category: 'meditation', description: 'Relationship Switch Words' },
  { lessonId: 'spiritual-1-4', category: 'healing', description: 'Health and Healing Words' },
  
  // Spiritual Awakening lessons
  { lessonId: 'spiritual-2-1', category: 'spiritual', description: 'Understanding Awakening' },
  { lessonId: 'spiritual-2-3', category: 'psychology', description: 'Dark Night of the Soul' },
  { lessonId: 'spiritual-2-5', category: 'wisdom', description: 'Living Awakened' },
  
  // Additional lesson mappings for variety
  { lessonId: 'spiritual-3-1', category: 'wisdom', description: 'Sacred Geometry Intro' },
  { lessonId: 'spiritual-4-2', category: 'healing', description: 'Reiki Principles' },
  { lessonId: 'spiritual-5-3', category: 'spiritual', description: 'Angel Communication' }
];