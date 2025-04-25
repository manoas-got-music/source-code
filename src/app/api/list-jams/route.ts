import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const jams = await prisma.jamSession.findMany({
    orderBy: { date: 'asc' },
  });
  return NextResponse.json(jams);
}
