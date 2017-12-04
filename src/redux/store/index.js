// redux 注入操作

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer'

// import { DEBUG, RDEBUG } from '../constants/GlobalConst';

//重写了logger这个中间件 http://www.jianshu.com/p/3334467e4b32
// const logger = store => next => action => {
// 	if (!DEBUG || !RDEBUG) return next(action);
//
// 	if (typeof action === 'function') {
// 		console.log('>>>> logger => dispatching a function');
// 	} else {
// 		console.log('>>>> logger => dispatching', action);
// 	}
//
// 	let result = next(action);
// 	console.log('next state', store.getState());
// 	return result;
// }

// const createStoreWithMiddleware = applyMiddleware(/*logger,*/ thunk)(createStore);//Thunk函数
// export default function configureStore(initialState) {
// 	return createStoreWithMiddleware(reducer, initialState);
// }

const middleware = [thunk];
export default createStore(reducer, applyMiddleware(...middleware));