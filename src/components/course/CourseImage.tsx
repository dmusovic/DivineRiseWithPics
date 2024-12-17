import * as React from 'react';

interface CourseImageProps {
  src: string;
  alt: string;
}

export function CourseImage({ src, alt }: CourseImageProps) {
  return (
    <image
      src={src}
      className="rounded-t-lg"
      stretch="aspectFill"
      row={0}
      col="0"
      colSpan={2}
      loadMode="async"
      alt={alt}
    />
  );
}