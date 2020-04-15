export const SELECT = 'SELECT';
export const RESULT = 'RESULT';

export const selectionAction = (key, value) => ({
  type: SELECT,
  key,
  value,
});

export const totalAction = (total) => ({
  type: RESULT,
  total,
});
