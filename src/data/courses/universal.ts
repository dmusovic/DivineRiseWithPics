import { Course } from '../../types';
import { getImageUrl } from '../../services/imageService';

export const universalCourses: Course[] = [
  {
    id: 'univ-1',
    title: '12 Universal Laws',
    description: 'Understanding the fundamental laws that govern our universe',
    thumbnail: getImageUrl('universal-laws'),
    lessons: [
      {
        id: 'univ-1-1',
        title: 'Law of Attraction',
        description: 'Master the fundamental principles of attraction and manifestation.',
        videoUrl: 'https://example.com/attraction.mp4',
        duration: 1200,
        completed: false,
        keyPoints: ['Core principles', 'Manifestation techniques', 'Alignment practices', 'Common obstacles'],
        nextSteps: ['Vision board creation', 'Gratitude journal', 'Visualization', 'Clear intentions']
      }
    ]
  },
  {
    id: 'univ-2',
    title: 'Quantum Manifestation',
    description: 'Learn to manifest using quantum principles',
    thumbnail: getImageUrl('quantum-manifestation'),
    lessons: [
      {
        id: 'univ-2-1',
        title: 'Quantum Basics',
        description: 'Understanding quantum principles for manifestation',
        videoUrl: 'https://example.com/quantum.mp4',
        duration: 1800,
        completed: false,
        keyPoints: ['Quantum mechanics', 'Observer effect', 'Parallel realities', 'Quantum jumping'],
        nextSteps: ['Quantum meditation', 'Reality shifting', 'Timeline jumping', 'Manifestation tracking']
      }
    ]
  },
  {
    id: 'univ-3',
    title: 'Sacred Mathematics',
    description: 'Explore the divine mathematics of the universe',
    thumbnail: getImageUrl('sacred-mathematics'),
    lessons: [
      {
        id: 'univ-3-1',
        title: 'Divine Numbers',
        description: 'Understanding the significance of sacred numbers and sequences',
        videoUrl: 'https://example.com/sacred-math.mp4',
        duration: 1600,
        completed: false,
        keyPoints: ['Sacred numbers', 'Golden ratio', 'Fibonacci sequence', 'Numerical patterns'],
        nextSteps: ['Number meditation', 'Pattern recognition', 'Sacred geometry', 'Daily observation']
      }
    ]
  },
  {
    id: 'univ-4',
    title: 'Cosmic Cycles',
    description: 'Understanding universal cycles and rhythms',
    thumbnail: getImageUrl('cosmic-cycles'),
    lessons: [
      {
        id: 'univ-4-1',
        title: 'Universal Rhythms',
        description: 'Learn about cosmic cycles and their influence on life',
        videoUrl: 'https://example.com/cosmic-cycles.mp4',
        duration: 1900,
        completed: false,
        keyPoints: ['Cosmic cycles', 'Natural rhythms', 'Time patterns', 'Life cycles'],
        nextSteps: ['Cycle tracking', 'Pattern observation', 'Rhythm alignment', 'Life planning']
      }
    ]
  },
  {
    id: 'univ-5',
    title: 'Hermetic Principles',
    description: 'Master the seven hermetic principles of reality',
    thumbnail: getImageUrl('hermetic-principles'),
    lessons: [
      {
        id: 'univ-5-1',
        title: 'The Kybalion',
        description: 'Explore the fundamental hermetic teachings and principles',
        videoUrl: 'https://example.com/hermetic.mp4',
        duration: 2100,
        completed: false,
        keyPoints: ['Seven principles', 'Mental transmutation', 'Polarity', 'Practical applications'],
        nextSteps: ['Principle study', 'Mental alchemy', 'Daily application', 'Wisdom journal']
      }
    ]
  }
];