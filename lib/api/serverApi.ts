import { cookies } from 'next/headers';
import api from './api';

export async function exampleFunction() {
  const cookieStore = await cookies();
  try {
    const { data } = await api.get(/*< Date type >*/ '/weeks', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
