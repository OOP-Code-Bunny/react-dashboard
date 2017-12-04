/*
 antTableInitialState.js
 */
import {Table, Input, Button, Icon} from 'antd'
import *as antTableActions from '../action/antTableActions'
import *as ObjectUtils from '../../utils/ObjectUtils'
import ExpandedRowRender from '../../components/commonComp/ExpandedRowRender/ExpandedRowRender'
const {Record, fromJS,} = require('immutable') //导入  Immutable.js 的 Record API

export const actionColumnTitle='action';//action列的title

export default Record({
    status: antTableActions.status.normal,
    $dataArray: fromJS([]), //已经拿到的数据,immutable.List 数据类型  , 里边放 model, toJS()可转成JS 数组
    $columns: fromJS([]),
    $keyWordsForSearch: fromJS([]),//数组元素就是 数组 某个 列的 title , 表示 此列 已被用户搜索
    apiName: '',//区分不同控件实例调的不同api请求
    meta: null,
    filterDropdownShowByWhichColomn:'',//TableColumnSearchInput.js 控件显示在 哪一列的列头上, 值是 那一列的 列头的title
    filterDropdownVisible: false,//点击 column头 上的 搜索icon后是否弹出 Input+button,同一时间只显示一个 filterDropdown控件, 如果此控件不赋值, filterIcon 就不显示
    opt: antTableActions.opt.init,
    // actionColumnTitle:'Action',//Action 列的 title
    reloadBtDisabled:true,//刷新table状态为初始状态的按钮
    scroll: {//antTable默认的content宽高
        x: 7000,//越大,tb的内容就越宽,就能一行显示下更多内容,每行的内容就不会因显示不下而换行显示
        // y: 600 y赋值会导致 表头的内容和 其列的内容不对齐
    },
    showFormModal:false,//是否显示 表单modal
    formModalFields:null,//table的formModal的数据源
    onEditRawID:null,//当前选择的哪一行进行编辑
    expandedRowRender:ExpandedRowRender,//https://ant.design/components/table-cn/#components-table-demo-expand 此属性赋值后, table 的 行就可展开
    expandedRowApiName:'',//展开某列后,对应显示的控件需要的api
    pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
    },//对应 https://ant.design/components/pagination-cn/, table的props
});

/**
 * antTable 通用的 成功拿到接口数据的 reducer
 * @param state
 * @param action
 */
export function antTableSuccessFetchData(state, action) {//

    //tb初始化时已有数据.直接返回tb的当前state
    if (action.opt === antTableActions.opt.init && state.getIn(['$dataArray']).toJS().length > 0) {
        return state;
    }

    let {data, meta/*服务器返回的 字段*/} = action.responseData;

    let _columns = state.getIn(['$columns']);
    if (antTableActions.opt.search!==action.opt){//除了搜索,其他 opt 都 组装 表头的数据源
        // _columns=_columns.clear();
        data && data.length > 0 &&(_columns=_columns.clear()/*接口没数据,就不清空 columns*/)&& Object.values(data[0]).map(
            (n, i) => {
                // if (i<10)
                {
                    let key = ObjectUtils.findKeyByValue(data[0], n, (n) => {
                        return n instanceof Array === false;
                    });
                    if (key !== null) {
                        _columns = _columns.set(_columns.size, {
                            title: key,
                            dataIndex: key,
                            sorter: false,
                            //是否开启 搜索此列的列头 关键字, 此列的 列头对应的 字段 是否可被搜索
                            isSearchThisColumnKey: true,
                            // render: value => value,
                            // width: key==='raw'?5:'',//一设置,列的宽度就不对了
                        });
                    }
                }

            }
        );
    }

    // if (_columns.length>0){
    //     _columns[0].width=100
    //     _columns[0].fixed='left';
    //     _columns[_columns.length-1].width=100;
    //     _columns[_columns.length-1].fixed='right'
    // }

    //组装table.body的数据源
    let temp$dataArray = state.getIn(['$dataArray']);
    if (temp$dataArray) {
        temp$dataArray = temp$dataArray.clear();

        //新获取到的数据添加到数组 结尾
        data && data.map(
            (v, i) => {
                v.expandedRowApiName=state.getIn(['expandedRowApiName']);//给每行数据多加一个属性,用于 此行展开后调用的apiName
                v.isExpanding=false;//此行数据是否正在展开
                v.rowKey=v.id;//唯一标记一行
                temp$dataArray = temp$dataArray.set(temp$dataArray.size, v);
            }
        );
    }

    let nextState = state
        .setIn(['$dataArray'], temp$dataArray)
        .setIn(['$columns'], _columns)
        .setIn(['status'], antTableActions.status.normal)
        .setIn(['meta'], meta ? meta : null)
        .setIn(['opt'], action.opt)
        .setIn(['pagination'], meta ? {
            current: meta.pagination.page,
            pageSize: meta.pagination.per_page,
            total: meta.pagination.total,
        } : {});


    return nextState;
}

export function antTableChangePagination(state, action) {
    let nextState = state
        .setIn(['pagination'], action.pagination);
    return nextState;
}

export function antTableChangeTbStatus(state, action) {
    let nextState = state
        .setIn(['status'], action.status);
    return nextState;
}

/**
 * antTable 基础 reducer, 每个 antTable 都会 有 的 通用action的 操作
 * @param state
 * @param action
 * @returns {*}
 */
export function antTableReducer(state, action) {
    switch (action.type) {
        case antTableActions.successFetchData: {//
            return antTableSuccessFetchData(state, action);
        }
            break;
        case antTableActions.changePagination: {
            return antTableChangePagination(state, action);
        }
            break;
        case antTableActions.changeTbStatus: {
            return antTableChangeTbStatus(state, action);
        }
            break;
        case antTableActions.filterDropdownVisible: {
            return antTableChangeFilterDropdownVisible(state, action);
        }
            break;
        case antTableActions.addSearchKey: {
            return addSearchKey(state, action)
        }
            break;
        case antTableActions.delSearchKey: {
            return delSearchKey(state, action)
        }
            break;
        case antTableActions.reloadAntTable:{
            return reloadAntTable(state,action)
        }
        break;
        case antTableActions.showFormModal:{
            return showFormModal(state,action)
        }
        break;
        default: {
            return state;
        }
            break;
    }
}

export function showFormModal(state, action) {
    let nextState = state
        .setIn(['showFormModal'], action.isShow)
        .setIn(['onEditRawID'],action.onEditRawID);
    ;
    return nextState;
}

/**
 * 改变  this.state.filterDropdownVisible
 * @param state
 * @param action
 */
export function antTableChangeFilterDropdownVisible(state, action) {
    let nextState = state
        .setIn(['filterDropdownVisible'], action.visible)
        .setIn(['filterDropdownShowByWhichColomn'], action.filterDropdownShowByWhichColomn);
    return nextState;
}

/**
 * 往 $keyWordsForSearch 数组里添加 元素(如果没有)
 * {
 *  searchKey: action.searchKey, searchText: action.searchText
 * }
 * ,表示 用户 搜索了 某个 之前未搜索过的 列
 * @param state
 * @param action
 * searchKey: 列的 title
 */
export function addSearchKey(state, action) {
    let keyWordsForSearch = state.getIn(['$keyWordsForSearch']);
    let arr = keyWordsForSearch.toJS();
    let add = true;
    for (let i = 0; i < arr; i++) {
        if (arr[i].searchKey === action.searchKey) {
            add = false;
            break;
        }
    }
    if (add) {
        keyWordsForSearch = keyWordsForSearch.set(keyWordsForSearch.size, {
            searchKey: action.searchKey, searchText: action.searchText
        });
    }
    let nextState = state
        .setIn(['$keyWordsForSearch'], keyWordsForSearch);
    return nextState;
}

/**
 * 取消某列的 搜索状态
 * @param state
 * @param action
 */
export function delSearchKey(state, action) {
    let keyWordsForSearch = state.getIn(['$keyWordsForSearch']);
    let arr = keyWordsForSearch.toJS();
    let del = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].searchKey === action.resetSearchKey.resetSearchKey) {
            del = true;
            arr.remove(arr[i]);
            break;
        }
    }
    if (del) {
        keyWordsForSearch=fromJS(arr);
    }
    let nextState = state
        .setIn(['$keyWordsForSearch'], keyWordsForSearch);
    return nextState;
}

/**
 * 取消所有列的 搜索状态
 * @param state
 * @param action
 */
export function reloadAntTable(state, action) {
    let keyWordsForSearch = state.getIn(['$keyWordsForSearch']).clear();
    let nextState = state
        .setIn(['$keyWordsForSearch'], keyWordsForSearch)
        .remove('pagination');
    return nextState;
}