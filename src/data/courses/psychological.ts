import { Course } from '../../types';
import { getImageUrl } from '../../services/imageService';
import {
  takingControlLessons,
  emotionalIntelligenceLessons,
  shadowWorkLessons,
  innerChildLessons,
  cognitiveRestructuringLessons
} from '../lessons/psychological';

export const psychologicalCourses: Course[] = [
  {
    id: 'psych-1',
    title: 'Taking Control',
    description: 'Master the art of self-control and personal development',
    thumbnail: getImageUrl('taking-control'),
    lessons: takingControlLessons
  },
  {
    id: 'psych-2',
    title: 'Emotional Intelligence',
    description: 'Develop your emotional awareness and control',
    thumbnail: getImageUrl('emotional-intelligence'),
    lessons: emotionalIntelligenceLessons
  },
  {
    id: 'psych-3',
    title: 'Shadow Work',
    description: 'Learn to embrace and integrate your shadow aspects',
    thumbnail: getImageUrl('shadow-work'),
    lessons: shadowWorkLessons
  },
  {
    id: 'psych-4',
    title: 'Inner Child Healing',
    description: 'Connect with and heal your inner child',
    thumbnail: getImageUrl('inner-child'),
    lessons: innerChildLessons
  },
  {
    id: 'psych-5',
    title: 'Cognitive Restructuring',
    description: 'Transform limiting beliefs and thought patterns',
    thumbnail: getImageUrl('cognitive-restructuring'),
    lessons: cognitiveRestructuringLessons
  }
];