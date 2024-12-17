import * as React from 'react';
import { Progress } from '../ui/Progress';

interface CourseProgressProps {
  value: number;
}

export function CourseProgress({ value }: CourseProgressProps) {
  return (
    <stackLayout className="px-4 pb-4">
      <Progress value={value} className="w-full" />
    </stackLayout>
  );
}