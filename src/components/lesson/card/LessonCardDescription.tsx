import * as React from 'react';

interface LessonCardDescriptionProps {
  description: string;
}

export function LessonCardDescription({ description }: LessonCardDescriptionProps) {
  return (
    <label 
      className="text-gray-600 text-sm mt-1" 
      textWrap={true} 
      text={description}
      lineHeight={1.2}
      maxLines={2}
    />
  );
}