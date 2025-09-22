export interface Crop {
  id: string;
  crop_name: string;
  season: string;
  area_planted: number; // acres
  expected_yield: number; // kg
  actual_yield: number; // kg
  price_per_kg: number; // GBP
  status: 'harvested' | 'in progress';
}

export interface Farm {
  id: string;
  farm_name: string;
  location: string;
  owner: string;
  total_acreage: number;
  active_crops: string[];
  annual_yield: number; // kg
  established_date: string;
  certifications: string[];
  crops: Crop[];
}

export const mockFarms: Farm[] = [
  {
    id: '1',
    farm_name: 'Green Valley Farm',
    location: 'Devon, UK',
    owner: 'John Smith',
    total_acreage: 150,
    active_crops: ['Wheat', 'Barley', 'Potatoes'],
    annual_yield: 45000,
    established_date: '2015-03-15',
    certifications: ['Organic', 'Fair Trade'],
    crops: [
      {
        id: '1-1',
        crop_name: 'Wheat',
        season: 'Spring',
        area_planted: 60,
        expected_yield: 18000,
        actual_yield: 19200,
        price_per_kg: 0.25,
        status: 'harvested'
      },
      {
        id: '1-2',
        crop_name: 'Barley',
        season: 'Autumn',
        area_planted: 45,
        expected_yield: 13500,
        actual_yield: 14200,
        price_per_kg: 0.22,
        status: 'harvested'
      },
      {
        id: '1-3',
        crop_name: 'Potatoes',
        season: 'Spring',
        area_planted: 30,
        expected_yield: 12000,
        actual_yield: 11600,
        price_per_kg: 0.35,
        status: 'harvested'
      }
    ]
  },
  {
    id: '2',
    farm_name: 'Sunrise Agriculture',
    location: 'Kent, UK',
    owner: 'Sarah Johnson',
    total_acreage: 200,
    active_crops: ['Corn', 'Soybeans', 'Sunflowers'],
    annual_yield: 62000,
    established_date: '2018-07-22',
    certifications: ['Sustainable Farming'],
    crops: [
      {
        id: '2-1',
        crop_name: 'Corn',
        season: 'Summer',
        area_planted: 80,
        expected_yield: 24000,
        actual_yield: 25600,
        price_per_kg: 0.28,
        status: 'harvested'
      },
      {
        id: '2-2',
        crop_name: 'Soybeans',
        season: 'Summer',
        area_planted: 70,
        expected_yield: 21000,
        actual_yield: 19800,
        price_per_kg: 0.32,
        status: 'harvested'
      },
      {
        id: '2-3',
        crop_name: 'Sunflowers',
        season: 'Summer',
        area_planted: 50,
        expected_yield: 15000,
        actual_yield: 16600,
        price_per_kg: 0.45,
        status: 'harvested'
      }
    ]
  },
  {
    id: '3',
    farm_name: 'Meadowbrook Farm',
    location: 'Yorkshire, UK',
    owner: 'Robert Brown',
    total_acreage: 120,
    active_crops: ['Carrots', 'Onions', 'Lettuce'],
    annual_yield: 28000,
    established_date: '2020-01-10',
    certifications: ['Organic', 'Local Produce'],
    crops: [
      {
        id: '3-1',
        crop_name: 'Carrots',
        season: 'Spring',
        area_planted: 40,
        expected_yield: 12000,
        actual_yield: 11500,
        price_per_kg: 0.40,
        status: 'harvested'
      },
      {
        id: '3-2',
        crop_name: 'Onions',
        season: 'Autumn',
        area_planted: 35,
        expected_yield: 10500,
        actual_yield: 9800,
        price_per_kg: 0.30,
        status: 'harvested'
      },
      {
        id: '3-3',
        crop_name: 'Lettuce',
        season: 'Spring',
        area_planted: 25,
        expected_yield: 7500,
        actual_yield: 6700,
        price_per_kg: 0.55,
        status: 'in progress'
      }
    ]
  },
  {
    id: '4',
    farm_name: 'Highland Crops',
    location: 'Scotland, UK',
    owner: 'Emma Wilson',
    total_acreage: 180,
    active_crops: ['Oats', 'Rye', 'Turnips'],
    annual_yield: 38000,
    established_date: '2017-05-08',
    certifications: ['Traditional Farming'],
    crops: [
      {
        id: '4-1',
        crop_name: 'Oats',
        season: 'Spring',
        area_planted: 70,
        expected_yield: 21000,
        actual_yield: 19800,
        price_per_kg: 0.26,
        status: 'harvested'
      },
      {
        id: '4-2',
        crop_name: 'Rye',
        season: 'Autumn',
        area_planted: 60,
        expected_yield: 18000,
        actual_yield: 17200,
        price_per_kg: 0.24,
        status: 'harvested'
      },
      {
        id: '4-3',
        crop_name: 'Turnips',
        season: 'Autumn',
        area_planted: 50,
        expected_yield: 15000,
        actual_yield: 10000,
        price_per_kg: 0.20,
        status: 'in progress'
      }
    ]
  },
  {
    id: '5',
    farm_name: 'Riverside Farm',
    location: 'Essex, UK',
    owner: 'Michael Davis',
    total_acreage: 95,
    active_crops: ['Tomatoes', 'Peppers', 'Cucumbers'],
    annual_yield: 22000,
    established_date: '2019-09-12',
    certifications: ['Greenhouse Certified'],
    crops: [
      {
        id: '5-1',
        crop_name: 'Tomatoes',
        season: 'Summer',
        area_planted: 35,
        expected_yield: 10500,
        actual_yield: 9800,
        price_per_kg: 0.60,
        status: 'harvested'
      },
      {
        id: '5-2',
        crop_name: 'Peppers',
        season: 'Summer',
        area_planted: 30,
        expected_yield: 9000,
        actual_yield: 8500,
        price_per_kg: 0.70,
        status: 'harvested'
      },
      {
        id: '5-3',
        crop_name: 'Cucumbers',
        season: 'Summer',
        area_planted: 30,
        expected_yield: 9000,
        actual_yield: 3700,
        price_per_kg: 0.50,
        status: 'in progress'
      }
    ]
  }
];

export function getFarmById(id: string): Farm | undefined {
  return mockFarms.find(farm => farm.id === id);
}

export function getAllFarms(): Farm[] {
  return mockFarms;
}

export function calculateFarmMetrics(farms: Farm[]) {
  const totalFarms = farms.length;
  const totalAcreage = farms.reduce((sum, farm) => sum + farm.total_acreage, 0);
  const totalAnnualYield = farms.reduce((sum, farm) => sum + farm.annual_yield, 0);
  const averageYieldPerAcre = totalAcreage > 0 ? totalAnnualYield / totalAcreage : 0;

  return {
    totalFarms,
    totalAcreage,
    totalAnnualYield,
    averageYieldPerAcre
  };
}

export function calculateFarmDetailMetrics(farm: Farm) {
  const totalRevenue = farm.crops.reduce((sum, crop) => sum + (crop.actual_yield * crop.price_per_kg), 0);
  const topCrop = farm.crops.reduce((top, crop) => 
    crop.actual_yield > top.actual_yield ? crop : top, farm.crops[0]);
  const averageYieldPerAcre = farm.total_acreage > 0 ? farm.annual_yield / farm.total_acreage : 0;

  return {
    annualYield: farm.annual_yield,
    topCrop: topCrop.crop_name,
    totalRevenue,
    averageYieldPerAcre
  };
}
