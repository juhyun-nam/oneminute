import { combineReducers } from 'redux';
import { SELECT } from './Actions';

function selectionListReducer(selectionList = [], action) {
  switch (action.type) {
    case SELECT:
      return action.list;
    default:
      return selectionList;
  }
}

export default combineReducers({
  selectionList: selectionListReducer,
});
