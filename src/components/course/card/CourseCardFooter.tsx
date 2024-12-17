import * as React from 'react';
import { Progress } from '../../ui/Progress';
import { ThemeConfig } from '../../../types/theme';

interface CourseCardFooterProps {
  progress: number;
  theme: ThemeConfig;
}

export function CourseCardFooter({ progress, theme }: CourseCardFooterProps) {
  return (
    <stackLayout className="px-3 pb-3 pt-1">
      <Progress 
        value={progress} 
        className={`w-full ${theme.progressClass}`}
      />
    </stackLayout>
  );
}