/**
 * @author caiwenduio
 * @file 全局的saga
 */

import {delay} from 'redux-saga';
import {
  take,
  call,
  put,
  select,
  fork,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {GLOBAL_ADD} from './type';
import action from './action'

function* before_add({ type, payload }) {
  console.warn('type', type);
  console.warn('payload', payload.count);
  // yield put(action.add())
}

function* listen_add() {
  yield takeEvery(GLOBAL_ADD, before_add);
}

// 使用数组导出
const listens = [listen_add()];

export default listens;
