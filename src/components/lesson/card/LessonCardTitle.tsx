import * as React from 'react';

interface LessonCardTitleProps {
  title: string;
}

export function LessonCardTitle({ title }: LessonCardTitleProps) {
  return (
    <label 
      className="text-lg font-bold text-gray-800" 
      text={title}
      textWrap={true}
      lineHeight={1.2}
    />
  );
}