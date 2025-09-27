export default function Loading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 rounded w-32 h-6 animate-pulse"></div>
            <div>
              <div className="bg-gray-200 mb-2 rounded w-64 h-8 animate-pulse"></div>
              <div className="bg-gray-200 rounded w-48 h-4 animate-pulse"></div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg w-32 h-10 animate-pulse"></div>
        </div>

        {/* Farm Profile Skeleton */}
        <div className="bg-white shadow mb-8 rounded-lg">
          <div className="px-6 py-4 border-gray-200 border-b">
            <div className="bg-gray-200 rounded w-32 h-6 animate-pulse"></div>
          </div>
          <div className="px-6 py-4">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <div className="bg-gray-200 mb-2 rounded w-24 h-4 animate-pulse"></div>
                  <div className="bg-gray-200 rounded w-32 h-4 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Farm Metrics Skeleton */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white shadow p-6 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 rounded-full w-8 h-8 animate-pulse"></div>
                </div>
                <div className="ml-4">
                  <div className="bg-gray-200 mb-2 rounded w-20 h-4 animate-pulse"></div>
                  <div className="bg-gray-200 rounded w-16 h-8 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Crops Table Skeleton */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-gray-200 border-b">
            <div className="bg-gray-200 rounded w-32 h-6 animate-pulse"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <th key={i} className="px-6 py-3">
                      <div className="bg-gray-200 rounded w-24 h-4 animate-pulse"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: 3 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 7 }).map((_, j) => (
                      <td key={j} className="px-6 py-4">
                        <div className="bg-gray-200 rounded w-20 h-4 animate-pulse"></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
