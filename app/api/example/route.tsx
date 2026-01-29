import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { api } from '@/app/api/api';
import { isAxiosError } from 'axios';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();

    const response = await api.get/*<type of data>*/('/api/', {
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
