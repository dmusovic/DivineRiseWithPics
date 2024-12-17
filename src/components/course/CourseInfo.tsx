import * as React from 'react';

interface CourseInfoProps {
  title: string;
  description: string;
}

export function CourseInfo({ title, description }: CourseInfoProps) {
  return (
    <stackLayout className="p-4">
      <label className="text-lg font-bold mb-1" text={title} />
      <label 
        className="text-gray-600 text-sm" 
        textWrap={true} 
        lineHeight={1.2}
        text={description} 
      />
    </stackLayout>
  );
}