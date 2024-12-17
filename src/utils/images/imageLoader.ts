import { CategoryKey } from './types';
import { IMAGE_CATEGORIES } from './categories';

export const getImageFromCategory = (category: CategoryKey, index: number): string | null => {
  const images = IMAGE_CATEGORIES[category];
  if (!images || images.length === 0) {
    console.warn(`No images found for category: ${category}`);
    return null;
  }
  
  const normalizedIndex = index % images.length;
  return images[normalizedIndex];
};

export const getOptimizedImageUrl = (baseUrl: string): string => {
  return `${baseUrl}?auto=format&fit=crop&w=800&q=80`;
};