/**
 * @author caiwenduio
 * @file 全局的reducer
 */

import {GLOBAL_ADD, GLOBAL_CHANGEGPAGELOADING} from './type';
import {GlobalReduxState, ActionState} from './definition';

const initState: GlobalReduxState = {
  count: 0,
  // 页面loading
  pageLoading: {
    loading: false,
  },
  // 页面statusBar
  statusBar: {
    backgroudColor: '#f5f5f5',
    hidden: false,
    barStyle: 'dark-content',
    translucent: false,
    animated: true,
  },
};

const reducer = (
  state: GlobalReduxState = initState,
  {type, payload}: ActionState,
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
