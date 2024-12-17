import * as React from 'react';
import { Lesson } from '../../../types';
import { ContentSection } from './ContentSection';

interface LessonDetailsProps {
  lesson: Lesson;
}

export function LessonDetails({ lesson }: LessonDetailsProps) {
  return (
    <stackLayout className="space-y-4">
      {/* Description Section */}
      <ContentSection
        title="Description"
        content={lesson.description}
      />

      {/* Key Learning Points */}
      <ContentSection
        title="Key Learning Points"
        items={lesson.keyPoints}
      />

      {/* Next Steps */}
      <ContentSection
        title="Your Next Steps"
        items={lesson.nextSteps}
      />
    </stackLayout>
  );
}