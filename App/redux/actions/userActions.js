import {TOGGLE_SESSION} from '../constants/userConstants';

export const activateSession = () => ({type: TOGGLE_SESSION, payload: true});

export const deActivateSession = () => ({type: TOGGLE_SESSION, payload: false});
