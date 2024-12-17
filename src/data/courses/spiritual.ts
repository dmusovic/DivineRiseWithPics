import { Course } from '../../types';
import { getImageUrl } from '../../services/imageService';
import {
  vedicSwitchWordsLessons,
  spiritualAwakeningLessons,
  sacredGeometryLessons,
  energyHealingLessons,
  divineConnectionLessons
} from '../lessons/spiritual';

export const spiritualCourses: Course[] = [
  {
    id: 'spiritual-1',
    title: 'Vedic Switch Words',
    description: 'Master the ancient practice of using specific words for manifestation',
    thumbnail: getImageUrl('vedic-switch'),
    lessons: vedicSwitchWordsLessons
  },
  {
    id: 'spiritual-2',
    title: 'Spiritual Awakening',
    description: 'Journey through the stages of spiritual enlightenment',
    thumbnail: getImageUrl('spiritual-awakening'),
    lessons: spiritualAwakeningLessons
  },
  {
    id: 'spiritual-3',
    title: 'Sacred Geometry',
    description: 'Explore the divine patterns in nature and consciousness',
    thumbnail: getImageUrl('sacred-geometry'),
    lessons: sacredGeometryLessons
  },
  {
    id: 'spiritual-4',
    title: 'Energy Healing',
    description: 'Learn various techniques for spiritual energy healing',
    thumbnail: getImageUrl('energy-healing'),
    lessons: energyHealingLessons
  },
  {
    id: 'spiritual-5',
    title: 'Divine Connection',
    description: 'Strengthen your connection with the divine and higher realms',
    thumbnail: getImageUrl('divine-connection'),
    lessons: divineConnectionLessons
  }
];