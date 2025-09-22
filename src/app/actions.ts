'use server';

import { revalidatePath } from 'next/cache';

export async function refreshData() {
  revalidatePath('/');
  revalidatePath('/farms');
}

export async function refreshFarmData(farmId: string) {
  revalidatePath(`/farms/${farmId}`);
}
