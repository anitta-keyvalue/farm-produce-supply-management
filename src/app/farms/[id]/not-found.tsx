import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center items-center bg-yellow-100 mx-auto mb-4 rounded-full w-12 h-12">
            <svg
              className="w-6 h-6 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          
          <h1 className="mb-2 font-bold text-gray-900 text-2xl">
            Farm not found
          </h1>
          
          <p className="mx-auto mb-6 max-w-md text-gray-600">
            The farm you're looking for doesn't exist or may have been removed. Please check the farm ID and try again.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition-colors"
            >
              Back to Dashboard
            </Link>
            
            <Link
              href="/farms"
              className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 transition-colors"
            >
              View All Farms
            </Link>
          </div>
          
          <div className="mt-8 text-gray-500 text-sm">
            <p>Available farm IDs: 1, 2, 3, 4, 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
