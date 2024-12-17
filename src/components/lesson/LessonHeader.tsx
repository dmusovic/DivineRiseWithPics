import * as React from 'react';
import { formatDuration } from '../../utils/formatUtils';

interface LessonHeaderProps {
  title: string;
  description: string;
  duration: number;
}

export function LessonHeader({ title, description, duration }: LessonHeaderProps) {
  return (
    <stackLayout className="p-4 bg-white border-b border-gray-200">
      <label className="text-2xl font-bold mb-2" text={title} />
      <label className="text-gray-600 mb-2" textWrap={true} text={description} />
      <label className="text-gray-500" text={`Duration: ${formatDuration(duration)}`} />
    </stackLayout>
  );
}