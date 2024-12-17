import * as React from 'react';
import { useImageLoader } from '../../../hooks/useImageLoader';
import { LoadingIndicator } from '../../ui/LoadingIndicator';

interface CourseCardHeaderProps {
  imageUrl: string;
  alt: string;
}

export function CourseCardHeader({ imageUrl, alt }: CourseCardHeaderProps) {
  const { isLoading, loadedUrl } = useImageLoader(imageUrl);

  return (
    <gridLayout className="w-full h-40">
      {isLoading ? (
        <LoadingIndicator className="w-full h-full" />
      ) : (
        <image
          src={loadedUrl}
          className="w-full h-full rounded-t-lg"
          stretch="aspectFill"
          loadMode="async"
        />
      )}
    </gridLayout>
  );
}