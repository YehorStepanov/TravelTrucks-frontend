import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { api } from '@/app/api/api';
import { isAxiosError } from 'axios';
import { Truck } from '@/types/Truck';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const location = request.nextUrl.searchParams.get('location') ?? '';
    const page = Number(request.nextUrl.searchParams.get('page') ?? 1);
    const form = request.nextUrl.searchParams.get('form') ?? '';
    const features = request.nextUrl.searchParams.get('features') ?? '';
  

    const response = await api.get<Truck[]>('/api/campers', {
      params: {
        location,
        page,
        form,
        features
      },
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        {
          error: error.message,
          response: error.response?.data,
        },
        { status: error.status },
      );
    }

    return NextResponse.json(
      {
        error: 'Internal Server Error',
      },
      { status: 500 },
    );
  }
}
