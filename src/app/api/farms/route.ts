import { NextResponse } from 'next/server';
import { getAllFarms, calculateFarmMetrics } from '@/lib/mock-data';

export async function GET() {
  try {
    const farms = getAllFarms();
    const metrics = calculateFarmMetrics(farms);
    
    return NextResponse.json({
      farms,
      metrics
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch farms data' },
      { status: 500 }
    );
  }
}
