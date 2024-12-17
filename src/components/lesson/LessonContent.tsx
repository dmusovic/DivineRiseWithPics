import * as React from 'react';
import { Lesson } from '../../types';
import { LessonHeader } from './LessonHeader';
import { LessonVideo } from './LessonVideo';
import { LessonDetails } from './sections/LessonDetails';

interface LessonContentProps {
  lesson: Lesson;
  onComplete: () => void;
}

export function LessonContent({ lesson, onComplete }: LessonContentProps) {
  return (
    <gridLayout rows="auto, *, auto" className="w-full h-full bg-white">
      {/* Header */}
      <LessonHeader
        row={0}
        title={lesson.title}
        description={lesson.description}
        duration={lesson.duration}
      />
      
      {/* Content Area */}
      <scrollView row={1} className="bg-gray-50">
        <stackLayout className="p-4 space-y-4">
          <LessonVideo videoUrl={lesson.videoUrl} />
          <LessonDetails lesson={lesson} />
        </stackLayout>
      </scrollView>
      
      {/* Bottom Button */}
      <button
        row={2}
        className="bg-blue-500 text-white p-4 m-4 rounded-lg"
        text={lesson.completed ? "Completed ✓" : "Mark as Complete"}
        isEnabled={!lesson.completed}
        onTap={onComplete}
      />
    </gridLayout>
  );
}