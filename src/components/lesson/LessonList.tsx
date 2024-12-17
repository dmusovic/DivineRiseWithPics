import * as React from 'react';
import { Lesson } from '../../types';
import { LessonCard } from './LessonCard';

interface LessonListProps {
  lessons: Lesson[];
  onSelectLesson: (lesson: Lesson) => void;
}

export function LessonList({ lessons, onSelectLesson }: LessonListProps) {
  return (
    <scrollView>
      <stackLayout className="p-4">
        <label className="text-xl font-semibold mb-4 text-gray-800" text="Course Lessons" />
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onSelect={onSelectLesson}
          />
        ))}
      </stackLayout>
    </scrollView>
  );
}