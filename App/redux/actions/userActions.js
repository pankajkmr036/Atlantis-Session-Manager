import {ACTIVATE_SESSION, DEACTIVATE_SESSION} from '../constants/userConstants';

export const activateSession = () => ({type: ACTIVATE_SESSION});

export const deActivateSession = () => ({
  type: DEACTIVATE_SESSION,
});
