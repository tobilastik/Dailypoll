import {POLL_ANSWERED, POLL_LIST, POLL_RESULT, USER_CHOICE} from '../types';

const setUserChoice = (payload: string) => ({
  type: USER_CHOICE,
  payload,
});

const setPollList = (payload: []) => ({
  type: POLL_LIST,
  payload,
});

const setPollAnswered = (payload: boolean) => ({
  type: POLL_ANSWERED,
  payload,
});

const setPollResults = (payload: any) => ({
  type: POLL_RESULT,
  payload,
});


export default {
  setUserChoice,
  setPollList,
  setPollAnswered,
  setPollResults
};
