import {all} from 'redux-saga/effects';
import globalSaga from '../global/store/saga';

export default function* rootSaga() {
  // 同时并发多个
  yield all([...globalSaga]);
}
