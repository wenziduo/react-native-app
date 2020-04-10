import {HOME_ADD} from './type';

export interface ModelState {
  count: number;
}
interface Action {
  type: string;
  payload: any;
}
const initState: ModelState = {
  count: 0,
};

const reducer = (state = initState, {type, payload}: Action) => {
  switch (type) {
    case HOME_ADD:
      return {...state, count: state.count + payload.count};
    default:
      return state;
  }
};
export default reducer;
