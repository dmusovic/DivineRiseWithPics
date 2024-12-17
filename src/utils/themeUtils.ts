import { Course } from '../types';
import { ThemeConfig } from '../types/theme';

const THEMES: Record<string, ThemeConfig> = {
  spiritual: {
    containerClass: 'bg-purple-100',
    contentClass: 'bg-purple-50',
    titleClass: 'text-purple-900',
    descriptionClass: 'text-purple-700',
    progressClass: 'bg-purple-500'
  },
  psychological: {
    containerClass: 'bg-blue-100',
    contentClass: 'bg-blue-50',
    titleClass: 'text-blue-900',
    descriptionClass: 'text-blue-700',
    progressClass: 'bg-blue-500'
  },
  universal: {
    containerClass: 'bg-indigo-100',
    contentClass: 'bg-indigo-50',
    titleClass: 'text-indigo-900',
    descriptionClass: 'text-indigo-700',
    progressClass: 'bg-indigo-500'
  }
};

export const getCourseTheme = (course: Course): ThemeConfig => {
  if (course.id.startsWith('spiritual-')) {
    return THEMES.spiritual;
  } else if (course.id.startsWith('psych-')) {
    return THEMES.psychological;
  } else if (course.id.startsWith('univ-')) {
    return THEMES.universal;
  }
  return THEMES.universal;
};