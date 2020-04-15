import { combineReducers } from 'redux';
import { SELECT, RESULT } from './Actions';

function selectionReducer(selection = {}, action) {
  switch (action.type) {
    case SELECT:
      return { ...selection, [action.key]: action.value };
    default:
      return selection;
  }
}

function totalReducer(total = {}, action) {
  switch (action.type) {
    case RESULT:
      return action.total;
    default:
      return total;
  }
}

export default combineReducers({
  selection: selectionReducer,
  total: totalReducer,
});
