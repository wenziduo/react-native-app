/**
 * @author caiwenduio
 * @file 全局的reducer
 */

import {GLOBAL_ADD, GLOBAL_CHANGEGPAGELOADING} from './type';

export interface GlobalReduxState {
  count: number;
  pageLoading: any;
}
export interface Action {
  type: any;
  payload: any;
}
const initState = {
  count: 0,
  pageLoading: {
    loading: false,
  },
};

const reducer = (
  state: GlobalReduxState = initState,
  {type, payload}: Action,
) => {
  switch (type) {
    case GLOBAL_ADD:
      return {...state, count: state.count + payload.count};
    case GLOBAL_CHANGEGPAGELOADING:
      return {...state, pageLoading: {...state.pageLoading, ...payload}};
    default:
      return state;
  }
};
export default reducer;
