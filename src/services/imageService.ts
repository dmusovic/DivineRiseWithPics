import { ImageSource } from '@nativescript/core';

const PICSUM_BASE_URL = 'https://picsum.photos';

// Seed values for consistent images per course
const IMAGE_SEEDS = {
  // Spiritual category
  'vedic-switch': 1001,
  'spiritual-awakening': 1002,
  'sacred-geometry': 1003,
  'energy-healing': 1004,
  'divine-connection': 1005,

  // Psychological category
  'taking-control': 1006,
  'emotional-intelligence': 1007,
  'shadow-work': 1008,
  'inner-child': 1009,
  'cognitive-restructuring': 1010,

  // Universal category
  'universal-laws': 1011,
  'quantum-manifestation': 1012,
  'sacred-mathematics': 1013,
  'cosmic-cycles': 1014,
  'hermetic-principles': 1015
};

export const getImageUrl = (imageId: string): string => {
  const seed = IMAGE_SEEDS[imageId] || 1000; // Fallback seed
  return `${PICSUM_BASE_URL}/seed/${seed}/800/600`;
};

export const getFallbackImageUrl = (): string => {
  return `${PICSUM_BASE_URL}/800/600`; // Random fallback image
};