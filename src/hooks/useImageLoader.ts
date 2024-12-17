import { useState, useCallback, useEffect } from 'react';
import { ImageSource } from '@nativescript/core';

export function useImageLoader(imageUrl: string | undefined) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [loadedUrl, setLoadedUrl] = useState(imageUrl);

  const preloadImage = useCallback(async (url: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await ImageSource.fromUrl(url);
      setLoadedUrl(url);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (imageUrl) {
      preloadImage(imageUrl);
    }
  }, [imageUrl, preloadImage]);

  return {
    isLoading,
    error,
    loadedUrl
  };
}