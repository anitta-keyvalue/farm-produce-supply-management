import { NextResponse } from 'next/server';
import { getAllFarms, calculateFarmMetrics } from '@/lib/mock-data';

export async function GET() {
  try {
    // Simulate API delay for realistic loading states
    await new Promise((resolve) => setTimeout(resolve, 200));

    const farms = getAllFarms();
    const metrics = calculateFarmMetrics(farms);
    
    return NextResponse.json({
      farms,
      metrics,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('API Error - GET /api/farms:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch farms data',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
