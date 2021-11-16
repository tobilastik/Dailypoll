import {USER_CHOICE} from '../types';

const setUserChoice = (payload: string) => ({
  type: USER_CHOICE,
  payload,
});

export default {
  setUserChoice,
};
