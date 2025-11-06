'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-darker via-cosmic-dark to-cosmic-darker flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-6xl">⚠️</div>
        <h2 className="text-3xl font-bold text-white">Something went wrong!</h2>
        <p className="text-gray-400">
          We encountered an error while loading the page. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-cosmic-purple hover:bg-cosmic-pink transition-colors rounded-lg text-white font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}