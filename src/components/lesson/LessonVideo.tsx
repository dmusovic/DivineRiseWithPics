import * as React from 'react';

interface LessonVideoProps {
  videoUrl: string;
}

export function LessonVideo({ videoUrl }: LessonVideoProps) {
  return (
    <gridLayout className="bg-gray-200 p-8">
      <label 
        className="text-center text-gray-600" 
        textWrap={true}
        text="Video content will be available in the native app"
      />
    </gridLayout>
  );
}