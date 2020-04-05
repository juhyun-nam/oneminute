export const SELECT = 'SELECT';
export const RESULT = 'RESULT';

export const selection = (key, value) => ({
  type: SELECT,
  key,
  value,
});

export const result = (statistics) => ({
  type: RESULT,
  statistics,
});
