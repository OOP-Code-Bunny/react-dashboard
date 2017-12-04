/*
 ReviewPurchaseTableReducer.js
 */
import {handleActions} from 'redux-actions'
import {Table, Input, Button, Icon, Popconfirm} from 'antd'
import *as antTableActions from '../action/antTableActions'
import antTableInitialState, {
    antTableReducer,
    antTableSuccessFetchData,
    actionColumnTitle
} from '../InitialState/antTableInitialState'
import ReviewPurchaseTbApi from '../../network/api/ReviewPurchaseTbApi'
import ConfirmedPurchaseDetailApi from '../../network/api/ConfirmedPurchaseDetailApi'
import {filterActions} from './index'

const initialState = new antTableInitialState()
    .setIn(['apiName'], ReviewPurchaseTbApi.apiName)
    .setIn(['expandedRowApiName'], ConfirmedPurchaseDetailApi.apiName)
    .setIn(['formModalFields'], [{
        label: 'CS',
        type: 'input',
        name: 'CS',
        value:Object.gStore.get(Object.admin_id),
        placeholder: Object.gStore.get(Object.admin_id),
        disabled: true,
        options: {
            rules: [{
                required: false,
                // message: '必填项!',
            }]
        }
    }, {
        label: 'newCashback',
        type: 'input',
        name: 'amount',//用于 提交接口时传的 body
        options: {
            rules: [{
                required: true,
                message: '必填项!',
            }],
        }
    },
        {
            label: 'Reason',
            type: 'input',
            name: 'notes',
            options: {
                rules: [{
                    required: true,
                    message: '必填项!',
                }],
            }
        }
    ])
    .setIn(['scroll'], {
        x: 1600,//越大,tb的内容就越宽,就能一行显示下更多内容,每行的内容就不会因显示不下而换行显示
        // y: 400 //y赋值会导致 表头的内容和 其列的内容不对齐
    });


export default function ReviewPurchaseTableReducer(state = initialState, action) {
    if (!filterActions(state, action)) {
        return state;
    }

    if (!(state instanceof antTableInitialState)) {
        return initialState.mergeDeep(state)
    }

    switch (action.type) {
        case antTableActions.successFetchData: {//ReviewPurchaseTable需要特殊处理 columns 里的 最右边的那列为 action 列
            let nextState = antTableSuccessFetchData(state, action);
            let $columns = nextState.getIn(['$columns']);
            let _columns = $columns.toJS();
            if (_columns.length > 0 && _columns[_columns.length - 1].title !== actionColumnTitle) {
                $columns = $columns.set($columns.size, {
                    title: actionColumnTitle,
                    key: 'operation',
                    // confirmID:'',
                    fixed: 'right',
                    width: 120,
                    // render: (text, record) => {
                    //     return <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                    //         <a href="#">Delete</a>
                    //     </Popconfirm>;
                    // }
                });
                nextState = nextState
                    .setIn(['$columns'], $columns);
            }
            return nextState;
        }
            break;
        default: {//此 tb 没有特殊的action ,就走 antTable 的通用 reducer处理 基础的 action
            return antTableReducer(state, action);
        }

    }

    /**
     * ## Default
     */
    return state;
}
