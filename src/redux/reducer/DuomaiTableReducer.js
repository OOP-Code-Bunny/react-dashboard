/*
 DuomaiTableReducer.js
 */
import {handleActions} from 'redux-actions'
import *as antTableActions from '../action/antTableActions'
import antTableInitialState,{antTableReducer} from '../InitialState/antTableInitialState'
import DuomaiTbApi from '../../network/api/DuomaiTbApi'
import {filterActions} from './index'
const initialState = new antTableInitialState()
    .setIn(['apiName'], DuomaiTbApi.apiName)
    .setIn(['scroll'], {
        x: 9000,//越大,tb的内容就越宽,就能一行显示下更多内容,每行的内容就不会因显示不下而换行显示
        // y: 900 //y赋值会导致 表头的内容和 其列的内容宽度不一致
    });


export default function DuomaiTableReducer(state = initialState, action) {
    if (!filterActions(state, action)) {
        return state;
    }

    if (!(state instanceof antTableInitialState)) {
        return initialState.mergeDeep(state)
    }

    switch (action.type) {
        default: {//此 tb 没有特殊的action ,就走 antTable 的通用 reducer处理 基础的 action
            return antTableReducer(state,action);
        }

    }

    /**
     * ## Default
     */
    return state;
}
