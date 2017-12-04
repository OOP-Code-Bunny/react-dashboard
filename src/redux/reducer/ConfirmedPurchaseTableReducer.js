/*
 ConfirmedPurchaseTableReducer.js
 */
import {handleActions} from 'redux-actions'
import {Table, Input, Button, Icon, Popconfirm} from 'antd'
import *as antTableActions from '../action/antTableActions'
import antTableInitialState, {
    antTableReducer,
    antTableSuccessFetchData,
    actionColumnTitle
} from '../InitialState/antTableInitialState'
import ConfirmedPurchaseTbApi from '../../network/api/ConfirmedPurchaseTbApi'
import ConfirmedPurchaseDetailApi from '../../network/api/ConfirmedPurchaseDetailApi'
import {filterActions} from './index'
const initialState = new antTableInitialState()
    .setIn(['apiName'], ConfirmedPurchaseTbApi.apiName)
    .setIn(['expandedRowApiName'], ConfirmedPurchaseDetailApi.apiName)
    .setIn(['scroll'], {
        x: 1600,//越大,tb的内容就越宽,就能一行显示下更多内容,每行的内容就不会因显示不下而换行显示
        // y: 800 //y赋值会导致 表头的内容和 其列的内容不对齐
    });


export default function ConfirmedPurchaseTableReducer(state = initialState, action) {
    if (!filterActions(state, action)) {
        return state;
    }

    if (!(state instanceof antTableInitialState)) {
        return initialState.mergeDeep(state)
    }

    switch (action.type) {
        default: {//此 tb 没有特殊的action ,就走 antTable 的通用 reducer处理 基础的 action
            return antTableReducer(state, action);
        }

    }

    /**
     * ## Default
     */
    return state;
}
