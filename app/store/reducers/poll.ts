import {USER_CHOICE, POLL_LIST, POLL_ANSWERED, POLL_RESULT} from '../types';

const initialstate = {
  userChoice: '',
  pollList: [],
  answered: false,
  pollResults: {}
};

type Action = {
  type: any;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case USER_CHOICE:
       return Object.assign({}, state, {
        userChoice: action.payload,
      });
    case POLL_LIST:
      return Object.assign({}, state, {
         pollList: action.payload,
      });
    case POLL_ANSWERED:
      return Object.assign({}, state, {
        answered: action.payload,
      });
      case POLL_RESULT:
      return Object.assign({}, state, {
        pollResults: action.payload,
      });
    default:
      return state;
  }
};
