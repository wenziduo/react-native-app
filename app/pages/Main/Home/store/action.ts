import {HOME_ADD} from './type';

export const add = (payload: any) => {
  return {
    type: HOME_ADD,
    payload,
  };
};
