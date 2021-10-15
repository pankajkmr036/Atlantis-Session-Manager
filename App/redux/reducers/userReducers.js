import {ACTIVATE_SESSION, DEACTIVATE_SESSION} from '../constants/userConstants';

export const sessionReducer = (state = {isSessionActive: false}, action) => {
  switch (action.type) {
    case ACTIVATE_SESSION:
      return {...state, isSessionActive: true};
    case DEACTIVATE_SESSION:
      return {...state, isSessionActive: false};
    default:
      return state;
  }
};
