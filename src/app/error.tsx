'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Dashboard error:', error);
  }, [error]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center items-center bg-red-100 mx-auto mb-4 rounded-full w-12 h-12">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          
          <h1 className="mb-2 font-bold text-gray-900 text-2xl">
            Something went wrong!
          </h1>
          
          <p className="mx-auto mb-6 max-w-md text-gray-600">
            We encountered an error while loading the farm dashboard. This might be a temporary issue.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition-colors"
            >
              Try again
            </button>
            
            <Link
              href="/"
              className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 transition-colors"
            >
              Go to Home
            </Link>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mx-auto mt-8 max-w-2xl text-left">
              <summary className="text-gray-500 hover:text-gray-700 text-sm cursor-pointer">
                Error Details (Development)
              </summary>
              <pre className="bg-gray-100 mt-2 p-4 rounded-lg overflow-auto text-xs">
                {error.message}
                {error.stack && `\n\nStack trace:\n${error.stack}`}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
