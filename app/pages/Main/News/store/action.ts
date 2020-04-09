import {HOME_ADD} from './type';

const add = (payload: any) => {
  console.log('payload', payload);
  return {
    type: HOME_ADD,
    payload,
  };
};

export default {
  add,
};
