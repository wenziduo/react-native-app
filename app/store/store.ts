import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './rootSaga';

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();
// 全局你可以创建多个reducer 在这里统一在一起
const rootReducers = combineReducers(reducers);
// 全局就管理一个store
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
