import * as React from 'react';

interface CourseCardImageProps {
  src?: string;
  alt: string;
}

export function CourseCardImage({ src, alt }: CourseCardImageProps) {
  // Use loremflickr.com which works well with NativeScript
  const imageUrl = src || `https://loremflickr.com/600/400/nature?random=${encodeURIComponent(alt)}`;
  
  return (
    <image
      src={imageUrl}
      className="w-full h-full rounded-t-lg"
      stretch="aspectFill"
      loadMode="async"
      backgroundColor="#f3f4f6" // Light gray background while loading
    />
  );
}