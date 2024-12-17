import * as React from 'react';
import { getFallbackImageUrl } from '../../../services/imageService';

interface CourseImageProps {
  title: string;
  imageUrl?: string;
}

export function CourseImage({ title, imageUrl }: CourseImageProps) {
  const [currentUrl, setCurrentUrl] = React.useState(imageUrl);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleError = () => {
    console.error(`Failed to load image for ${title}`);
    setCurrentUrl(getFallbackImageUrl());
  };

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <gridLayout className="w-full h-48">
      <image
        src={currentUrl}
        className="w-full h-full rounded-t-lg"
        stretch="aspectFill"
        loadMode="async"
        onError={handleError}
        loaded={handleLoaded}
      />
      {isLoading && (
        <activityIndicator
          busy={true}
          className="text-gray-500"
        />
      )}
    </gridLayout>
  );
}