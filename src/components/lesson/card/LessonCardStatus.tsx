import * as React from 'react';
import { formatDuration } from '../../../utils/formatUtils';

interface LessonCardStatusProps {
  duration: number;
  completed: boolean;
}

export function LessonCardStatus({ duration, completed }: LessonCardStatusProps) {
  return (
    <stackLayout orientation="horizontal" className="mt-auto">
      <label 
        className="text-sm text-gray-500" 
        text={formatDuration(duration)} 
      />
      {completed && (
        <label 
          className="text-sm text-green-500 ml-2" 
          text="✓ Completed" 
        />
      )}
    </stackLayout>
  );
}