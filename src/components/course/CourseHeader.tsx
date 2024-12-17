import * as React from 'react';

interface CourseHeaderProps {
  title: string;
  description: string;
  thumbnail: string;
}

export function CourseHeader({ title, description, thumbnail }: CourseHeaderProps) {
  return (
    <stackLayout className="p-4 bg-white border-b border-gray-200">
      <image
        src={thumbnail}
        className="w-full h-40 rounded-lg mb-4"
        stretch="aspectFill"
      />
      <label className="text-2xl font-bold mb-2" text={title} />
      <label className="text-gray-600" textWrap={true} text={description} />
    </stackLayout>
  );
}