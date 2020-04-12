import {HOME_ADD} from './type';

export const actions = {
  add(payload: any) {
    return {
      type: HOME_ADD,
      payload,
    };
  },
};
export const sagaActions = {
  add(payload: any) {
    return {
      type: HOME_ADD,
      payload,
    };
  },
};
