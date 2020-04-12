import { combineReducers } from 'redux';
import { SELECT, RESULT } from './Actions';

function selectionReducer(selections = {}, action) {
  switch (action.type) {
    case SELECT:
      return { ...selections, [action.key]: action.value };
    default:
      return selections;
  }
}

function statisticsReducer(statistics = {}, action) {
  switch (action.type) {
    case RESULT:
      return action.statistics;
    default:
      return statistics;
  }
}

export default combineReducers({
  selections: selectionReducer,
  statistics: statisticsReducer,
});
