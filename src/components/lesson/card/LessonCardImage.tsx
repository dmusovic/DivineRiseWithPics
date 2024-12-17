import * as React from 'react';
import { getLessonImage } from '../../../utils/lessonImageUtils';

interface LessonCardImageProps {
  imageUrl: string;
}

export function LessonCardImage({ imageUrl }: LessonCardImageProps) {
  return (
    <gridLayout className="rounded-l-lg" rows="*">
      <image
        className="rounded-l-lg"
        src={imageUrl}
        stretch="aspectFill"
        height="120"
        loadMode="async"
      />
    </gridLayout>
  );
}