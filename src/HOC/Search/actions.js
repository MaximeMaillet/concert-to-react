import api from '../../services/api';

export const types = {
  SEARCH_SET_RESULTS: 'search/setResults',
  SEARCH_SET_PAGINATION: 'search/setPagination',
  SEARCH_START_LOADING: 'search/startLoading',
  SEARCH_STOP_LOADING: 'search/stopLoading',
  SEARCH_ERROR: 'search/error',
};

function search(search) {
  return async(dispatch, getState) => {
    try {
      dispatch(startLoading());
      const result = await api.search.artists(search);
      dispatch(setResults(result.data.results));
      dispatch(setPagination(result.data.pagination));
    } catch(e) {
      dispatch(error(e));
    } finally {
      dispatch(stopLoading());
    }
  }
}

function setPagination(pagination) {
  return {
    type: types.SEARCH_SET_PAGINATION,
    pagination,
  }
}

function setResults(results) {
  return {
    type: types.SEARCH_SET_RESULTS,
    results: results,
  }
}

function startLoading() {
  return {
    type: types.SEARCH_START_LOADING
  }
}

function stopLoading() {
  return {
    type: types.SEARCH_STOP_LOADING
  }
}

function error(errors) {
  return {
    type: types.SEARCH_ERROR,
    errors,
  }
}

export default {
  search,
};