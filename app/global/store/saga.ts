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
import {NavigationActions} from 'react-navigation';
import {SAGA_GLOBAL_ADD} from './type';
import {actions} from './action';

function* before_add({type, payload}) {
  // yield put(NavigationActions.navigate({ routeName: 'Detail' }))
  yield put(actions.add(payload));
}

function* listen_add() {
  yield takeEvery(SAGA_GLOBAL_ADD, before_add);
}

// 使用数组导出
const listens = [listen_add()];

export default listens;
