import api from './api';

export async function exampleFunction() {
  try {
    const { data } = await api.get(/*< Date type >*/ '/weeks');
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
