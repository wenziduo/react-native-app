/**
 * @author caiwenduio
 * @file 全局的reducer
 */

import {GLOBAL_ADD} from './type';

interface ReduxState {
  count: number;
}
interface Action {
  type: any;
  payload: any;
}
const initState = {
  count: 0,
};

const reducer = (state: ReduxState = initState, {type, payload}: Action) => {
  switch (type) {
    case GLOBAL_ADD:
      return {...state, count: state.count + payload.count};
    default:
      return state;
  }
};
export default reducer;
