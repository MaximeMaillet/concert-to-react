import {types} from './actions';

const initialState = {
  message: 'Chargement ...',
  visible: false,
};

export default function reducer(state = initialState, action) {
  if(action.type === types.START_GLOBAL_LOADER) {
    return {
      ...state,
      visible: true,
      message: action.message,
    };
  } else if(action.type === types.STOP_GLOBAL_LOADER) {
    return {
      ...state,
      visible: false,
    }
  }

  return state;
};