import * as React from 'react';
import { Lesson } from '../../types';
import { getLessonImage } from '../../utils/lessonImageUtils';
import { LessonCardImage } from './card/LessonCardImage';
import { LessonCardTitle } from './card/LessonCardTitle';
import { LessonCardDescription } from './card/LessonCardDescription';
import { LessonCardStatus } from './card/LessonCardStatus';

interface LessonCardProps {
  lesson: Lesson;
  onSelect: (lesson: Lesson) => void;
}

export function LessonCard({ lesson, onSelect }: LessonCardProps) {
  return (
    <gridLayout
      className="bg-white rounded-lg shadow-md m-2"
      rows="auto"
      columns="120, *"
      onTap={() => onSelect(lesson)}
      height="120"
    >
      {/* Left side - Image */}
      <LessonCardImage imageUrl={getLessonImage(lesson)} />
      
      {/* Right side - Content */}
      <stackLayout col={1} className="px-3 py-2">
        <LessonCardTitle title={lesson.title} />
        <LessonCardDescription description={lesson.description} />
        <LessonCardStatus 
          duration={lesson.duration}
          completed={lesson.completed}
        />
      </stackLayout>
    </gridLayout>
  );
}