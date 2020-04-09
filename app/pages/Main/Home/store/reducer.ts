import {HOME_ADD} from './type';

interface ReduxState {
  count: number;
}
interface Action {
  type: any;
  payload: any;
}
const initData = {
  count: 0,
};

export default (state: ReduxState = initData, {type, payload}: Action) => {
  switch (type) {
    case HOME_ADD:
      return {num: state.count + payload.count};
    default:
      return state;
  }
};
