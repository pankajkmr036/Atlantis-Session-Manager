import {TOGGLE_SESSION} from '../constants/userConstants';

export const sessionReducer = (state = {isSessionActive: false}, action) => {
  switch (action.type) {
    case TOGGLE_SESSION:
      return {...state, isSessionActive: !state.isSessionActive};
    default:
      return state;
  }
};
