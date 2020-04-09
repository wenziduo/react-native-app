/**
 * @author caiwenduio
 * @file 全局的action
 */

import {GLOBAL_ADD} from './type';

const add = (payload: any) => {
  console.log('payload', payload);
  return {
    type: GLOBAL_ADD,
    payload,
  };
};

export default {
  add,
};
