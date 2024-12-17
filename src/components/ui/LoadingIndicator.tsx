import * as React from 'react';

interface LoadingIndicatorProps {
  className?: string;
}

export function LoadingIndicator({ className = '' }: LoadingIndicatorProps) {
  return (
    <activityIndicator
      busy={true}
      className={`text-gray-500 ${className}`}
    />
  );
}