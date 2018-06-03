import {types} from './actions';

const initialState = {
  results: [],
  pagination: null,
  endSearch: false,
  setResults: false,
  setPagination: false,
};

export default function reducer(state = initialState, action) {
  if(action.type === types.SEARCH_START_LOADING) {
    return {
      ...state,
      loading: true,
    };
  } else if(action.type === types.SEARCH_STOP_LOADING) {
    return {
      ...state,
      loading: false,
      endSearch: true,
      setPagination: false,
      setResults: false,
    }
  } else if(action.type === types.SEARCH_ERROR) {
    return {
      ...state,
      errors: action.errors,
    }
  } else if(action.type === types.SEARCH_SET_RESULTS) {
    return {
      ...state,
      setResults: true,
      results: action.results,
    }
  } else if(action.type === types.SEARCH_SET_PAGINATION) {
    return {
      ...state,
      setPagination: true,
      pagination: action.pagination,
    }
  }

  return state;
};