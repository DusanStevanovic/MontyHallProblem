// @flow
export const getRequestOptions = (radio: string, combinations: number) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'same-origin',
  cache: 'no-cache',
  body: JSON.stringify({ radio, combinations }),
});
