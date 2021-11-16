import {USER_CHOICE} from '../types';

const initialstate = {
  userChoice: '',
};

type Action = {
  type: any;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case USER_CHOICE:
      return {
        userChoice: action.payload,
      };
    default:
      return state;
  }
};
