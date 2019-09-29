import { combineReducers } from 'redux'
import {
  ITEMS_IS_LOADING,
  GET_BY_AUTHOR,
  GET_BY_TAG,
  GET_SEARCH,
  SET_ERROR,
} from './actions'

function isLoading(state = false, action) {
  if (action.type === ITEMS_IS_LOADING) {
    return action.isLoading;
  }
  return false;
}

function errors(state = {}, action) {
  if (action.type === SET_ERROR) {
    return action.error;
  }
  return state;
}

function quickResults(state = [], action) {
  switch (action.type) {
    case GET_BY_AUTHOR:
    case GET_BY_TAG:
      return Object.assign({}, state, { items: action.items });
    default:
      return state;
  }
}

function searchResults(state = [], action) {
  switch (action.type) {
    case GET_SEARCH:
      return Object.assign({}, state, { items: action.items });
    default:
      return state;
  }
}

const searchReducer = combineReducers({
  isLoading,
  searchResults,
  quickResults,
  errors,
})

export default searchReducer;