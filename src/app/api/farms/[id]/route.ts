import { NextResponse } from 'next/server';
import { getFarmById, calculateFarmDetailMetrics } from '@/lib/mock-data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Validate farm ID format
    if (!id || typeof id !== 'string' || !/^\d+$/.test(id)) {
      return NextResponse.json(
        { 
          error: 'Invalid farm ID',
          message: 'Farm ID must be a valid number',
          timestamp: new Date().toISOString()
        },
        { status: 400 }
      );
    }

    // Simulate API delay for realistic loading states
    await new Promise((resolve) => setTimeout(resolve, 300));

    const farm = getFarmById(id);
    
    if (!farm) {
      return NextResponse.json(
        { 
          error: 'Farm not found',
          message: `No farm found with ID: ${id}`,
          timestamp: new Date().toISOString()
        },
        { status: 404 }
      );
    }

    const metrics = calculateFarmDetailMetrics(farm);
    
    return NextResponse.json({
      farm,
      metrics,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('API Error - GET /api/farms/[id]:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch farm data',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
