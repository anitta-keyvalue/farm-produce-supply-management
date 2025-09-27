import { getAllFarms, calculateFarmMetrics, Farm } from '@/lib/mock-data';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';
import { refreshData } from './actions';

// Enable ISR with 30 second revalidation
export const revalidate = 30;

async function getFarmsData() {
  const farms = getAllFarms();
  const metrics = calculateFarmMetrics(farms);
  return { farms, metrics };
}

export default async function Dashboard() {
  const { farms, metrics } = await getFarmsData();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-bold text-gray-900 text-3xl">Farm Produce Supply Management</h1>
            <p className="mt-2 text-gray-600">Monitor and manage farm supply chain operations</p>
          </div>
          <form action={refreshData}>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-white transition-colors"
            >
              Refresh Data
            </button>
          </form>
        </div>

        {/* Metrics Overview */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white shadow p-6 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-green-100 rounded-full w-8 h-8">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-500 text-sm">Total Farms</p>
                <p className="font-semibold text-gray-900 text-2xl">{metrics.totalFarms}</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-blue-100 rounded-full w-8 h-8">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-500 text-sm">Total Acreage</p>
                <p className="font-semibold text-gray-900 text-2xl">{formatNumber(metrics.totalAcreage)} acres</p>
              </div>
            </div>
          </div>

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
                <p className="font-medium text-gray-500 text-sm">Total Annual Yield</p>
                <p className="font-semibold text-gray-900 text-2xl">{formatNumber(metrics.totalAnnualYield)} kg</p>
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
                <p className="font-medium text-gray-500 text-sm">Average Yield per Acre</p>
                <p className="font-semibold text-gray-900 text-2xl">{formatNumber(Math.round(metrics.averageYieldPerAcre))} kg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Farms List */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-gray-200 border-b">
            <h2 className="font-semibold text-gray-900 text-xl">All Farms</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Farm Name
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Total Acreage
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Active Crops
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Annual Yield
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {farms.map((farm: {
                  id: string | number;
                  farm_name: string;
                  location: string;
                  owner: string;
                  total_acreage: number;
                  active_crops: string[];
                  annual_yield: number;
                }) => (
                  <tr key={farm.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link 
                        href={`/farms/${farm.id}`}
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        {farm.farm_name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {farm.location}
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {farm.owner}
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {formatNumber(farm.total_acreage)} acres
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {farm.active_crops.join(', ')}
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-sm whitespace-nowrap">
                      {formatNumber(farm.annual_yield)} kg
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