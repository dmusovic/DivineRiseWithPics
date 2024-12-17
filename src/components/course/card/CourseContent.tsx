import * as React from 'react';

interface CourseContentProps {
  title: string;
  description: string;
}

export function CourseContent({ title, description }: CourseContentProps) {
  return (
    <stackLayout className="p-4">
      <label 
        className="text-xl font-bold mb-2" 
        text={title}
        textWrap={true}
      />
      <label 
        className="text-gray-600 text-sm" 
        text={description}
        textWrap={true}
        lineHeight={1.4}
      />
    </stackLayout>
  );
}