/**
 * @author caiwenduio
 * @file 全局的action
 */

import {GLOBAL_ADD, SAGA_GLOBAL_ADD} from './type';

const add = (payload: any) => {
  return {
    type: GLOBAL_ADD,
    payload,
  };
};

const asga_add = (payload: any) => {
  return {
    type: SAGA_GLOBAL_ADD,
    payload,
  };
};

export default {
  add,
  asga_add,
};
