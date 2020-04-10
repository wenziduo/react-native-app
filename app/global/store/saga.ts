/**
 * @author caiwenduio
 * @file 全局的saga
 */
import {
  take,
  call,
  put,
  select,
  fork,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {SAGA_GLOBAL_ADD} from './type';
import action from './action';

function* before_add({type, payload}) {
  console.warn('type', type);
  yield put(action.add(payload));
}

function* listen_add() {
  yield takeEvery(SAGA_GLOBAL_ADD, before_add);
}

// 使用数组导出
const listens = [listen_add()];

export default listens;
