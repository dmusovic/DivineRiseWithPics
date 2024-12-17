import * as React from 'react';
import { truncateText } from '../../../utils/formatUtils';

interface CourseCardContentProps {
  title: string;
  description: string;
}

export function CourseCardContent({ title, description }: CourseCardContentProps) {
  const truncatedDescription = truncateText(description, 100);
  
  return (
    <stackLayout className="px-3 py-2 h-24">
      <label 
        className="text-lg font-bold mb-1" 
        text={title}
        textWrap={true}
      />
      <label 
        className="text-gray-600 text-sm" 
        text={truncatedDescription}
        textWrap={true}
        lineHeight={1.2}
      />
    </stackLayout>
  );
}