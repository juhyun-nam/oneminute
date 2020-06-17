export const SELECT = 'SELECT';
export const RESULT = 'RESULT';

interface SelectionAction {
  type: typeof SELECT
  key: string
  value: string
}
interface TotalAction {
  type: typeof RESULT
  total: any
}

export const selectionAction = (key: string, value: string) => ({
  type: SELECT,
  key,
  value,
});

export const totalAction = (total: any) => ({
  type: RESULT,
  total,
});

export type ActionType = SelectionAction | TotalAction;
