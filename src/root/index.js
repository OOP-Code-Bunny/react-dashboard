import React from 'react';
import ReactDOM from 'react-dom';
import globalVar from '../utils/globalConst/globalVar'
import './index.css';
import '../style/lib/animate.css';
import registerServiceWorker from './registerServiceWorker';
import store from '../redux/store'
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import CRouter from '../routes';
require('es6-promise').polyfill();//https://github.com/camsong/fetch-jsonp


/**
 * 只执行一次
 * @param Component :路由组件
 *
 */
const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                { Component }
            </Provider>
        </AppContainer>
        ,
        document.getElementById('root')
    );
};
render(CRouter);

registerServiceWorker();
