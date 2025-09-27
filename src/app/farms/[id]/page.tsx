import { getFarmById, calculateFarmDetailMetrics, Farm } from '@/lib/mock-data';
import { formatCurrency, formatNumber, formatDate } from '@/lib/utils';
import Link from 'next/link';
import { refreshFarmData } from '@/app/actions';
import { notFound } from 'next/navigation';

// Enable ISR with segment-level caching
export const revalidate = 30;

async function getFarmData(id: string) {
  const farm = getFarmById(id);
  if (!farm) {
    notFound();
  }
  const metrics = calculateFarmDetailMetrics(farm);
  return { farm, metrics };
}

export default async function FarmDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { farm, metrics } = await getFarmData(id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              ← Back to Dashboard
            </Link>
            <div>
              <h1 className="font-bold text-gray-900 text-3xl">{farm.farm_name}</h1>
              <p className="mt-2 text-gray-600">Farm Details & Crop Management</p>
            </div>
          </div>
          <form action={refreshFarmData.bind(null, farm.id)}>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-white transition-colors"
            >
              Refresh Data
            </button>
          </form>
        </div>

        {/* Farm Profile Info */}
        <div className="bg-white shadow mb-8 rounded-lg">
          <div className="px-6 py-4 border-gray-200 border-b">
            <h2 className="font-semibold text-gray-900 text-xl">Farm Profile</h2>
          </div>
          <div className="px-6 py-4">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="block font-medium text-gray-500 text-sm">Farm Name</label>
                <p className="mt-1 text-gray-900 text-sm">{farm.farm_name}</p>
              </div>
              <div>
                <label className="block font-medium text-gray-500 text-sm">Location</label>
                <p className="mt-1 text-gray-900 text-sm">{farm.location}</p>
              </div>
              <div>
                <label className="block font-medium text-gray-500 text-sm">Owner</label>
                <p className="mt-1 text-gray-900 text-sm">{farm.owner}</p>
              </div>
              <div>
                <label className="block font-medium text-gray-500 text-sm">Established Date</label>
                <p className="mt-1 text-gray-900 text-sm">{formatDate(farm.established_date)}</p>
              </div>
              <div>
                <label className="block font-medium text-gray-500 text-sm">Total Acreage</label>
                <p className="mt-1 text-gray-900 text-sm">{formatNumber(farm.total_acreage)} acres</p>
              </div>
              <div>
                <label className="block font-medium text-gray-500 text-sm">Certifications</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {farm.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-green-100 px-2.5 py-0.5 rounded-full font-medium text-green-800 text-xs"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Farm Metrics */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white shadow p-6 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-yellow-100 rounded-full w-8 h-8">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-500 text-sm">Annual Yield</p>
                <p className="font-semibold text-gray-900 text-2xl">{formatNumber(metrics.annualYield)} kg</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-green-100 rounded-full w-8 h-8">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-500 text-sm">Top Crop</p>
                <p className="font-semibold text-gray-900 text-2xl">{metrics.topCrop}</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-blue-100 rounded-full w-8 h-8">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-500 text-sm">Total Revenue</p>
                <p className="font-semibold text-gray-900 text-2xl">{formatCurrency(metrics.totalRevenue)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-purple-100 rounded-full w-8 h-8">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-500 text-sm">Avg Yield per Acre</p>
                <p className="font-semibold text-gray-900 text-2xl">{formatNumber(Math.round(metrics.averageYieldPerAcre))} kg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Crops Table */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-gray-200 border-b">
            <h2 className="font-semibold text-gray-900 text-xl">Crops Grown</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Crop Name
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Season
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Area Planted
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Expected Yield
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Actual Yield
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Price per kg
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {farm.crops.map((crop) => (
                  <tr key={crop.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm whitespace-nowrap">
                      {crop.crop_name}
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {crop.season}
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {formatNumber(crop.area_planted)} acres
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {formatNumber(crop.expected_yield)} kg
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {formatNumber(crop.actual_yield)} kg
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {formatCurrency(crop.price_per_kg)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        crop.status === 'harvested' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {crop.status === 'harvested' ? 'Harvested' : 'In Progress'}
                      </span>
                    </td>
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
