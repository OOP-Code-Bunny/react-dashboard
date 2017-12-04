/*
 antTableActions.js
 */

import {createAction} from 'redux-actions'
import *as BaseActions from './BaseActions'
import routePath_Comp from '../../routes/routePath_Comp'
import *as linkshareTableActions from './linkshareTableActions'
import networkTransactionsApi from '../../network/api/networkTransactionsApi'
import GeneralTransactionsTbApi from '../../network/api/GeneralTransactionsTbApi'
import ReviewPurchaseTbApi from '../../network/api/ReviewPurchaseTbApi'
import ConfirmedPurchaseTbApi from '../../network/api/ConfirmedPurchaseTbApi'

/**
 * table 的 状态
 * @type {{normal: string, loading: string}}
 */
export const status = {
    normal: 'normal',
    loading: 'loading',
};

/**
 * table 请求数据的类型
 * @type {{init: number, refresh: number, search: number}}
 */
export const opt = {
    init: 0,//初始化tb数据源,此时tb可能已有数据
    refresh: 1,//刷新tb数据源,列头 也刷新
    search: 2,//刷新tb的 body 的内容 , 列头 不刷新
}

//通用table 请求 接口时 发送 是 高阶函数action
export function fetchTableDataAction(props, opt) {
    switch (props.param.id) {
        case routePath_Comp.NetworkTransactions.linkshare.param.id:
        case routePath_Comp.NetworkTransactions.cj.param.id:
        case routePath_Comp.NetworkTransactions.Amazon.param.id:
        case routePath_Comp.NetworkTransactions.Inquiry.param.id:
        case routePath_Comp.NetworkTransactions.Ebay.param.id:
        case routePath_Comp.NetworkTransactions.Pepperjam.param.id:
        case routePath_Comp.NetworkTransactions.ShareASale.param.id:
        case routePath_Comp.NetworkTransactions.ImpactRadius.param.id:
        case routePath_Comp.NetworkTransactions.Skimlinks.param.id:
        case routePath_Comp.NetworkTransactions.Zanox.param.id:
        case routePath_Comp.NetworkTransactions.Webgains.param.id:
        case routePath_Comp.NetworkTransactions.AffiliateWindow.param.id:
        case routePath_Comp.NetworkTransactions.AvantLink.param.id:
        case routePath_Comp.NetworkTransactions.ChineseAN.param.id:
        case routePath_Comp.NetworkTransactions.PerformanceHorizon.param.id:
        case routePath_Comp.NetworkTransactions.BlueNile.param.id:
        case routePath_Comp.NetworkTransactions.Adways.param.id:
        case routePath_Comp.NetworkTransactions.LinkTech.param.id:
        case routePath_Comp.NetworkTransactions.Duomai.param.id:
        {
            return networkTransactionsApi.fetchNetworkTransactionTbApi({
                props, opt
            })
        }
            break;
        case routePath_Comp.generalTransactions.param.id:
        {
            return GeneralTransactionsTbApi.fetchTbDataApi({
                props, opt
            })
        }
            break;
        case routePath_Comp.Purchase.ReviewPurchase.param.id:
        {
            return ReviewPurchaseTbApi.fetchTbDataApi({
                props, opt
            })
        }
            break;
        case routePath_Comp.Purchase.ConfirmedPurchase.param.id:
        {
            return ConfirmedPurchaseTbApi.fetchTbDataApi({
                props, opt
            })
        }
            break;
    }
}

//antTable 成功拿到接口数据
export const successFetchData = 'successFetchData';
export const successFetchDataAction = BaseActions.createBaseAction(successFetchData);//createAction('successFetchData');

//改变 antTable 的 pagination
export const changePagination = 'changePagination';
export const changePaginationAction = BaseActions.createBaseAction(changePagination);//createAction('successFetchData');

//改变anttable的 状态
export const changeTbStatus = 'changeTbStatus';
export const changeTbStatusAction = BaseActions.createBaseAction(changeTbStatus);

//add 一个 列的 title和搜索此列的 内容 到 $keyWordsForSearch,表示用户 添加了一个 搜索某列的 title+搜索内容 ,&& 开始 搜索
export const addSearchKey = 'addSearchKey';
export const addSearchKeyAction = BaseActions.createBaseAction(addSearchKey);

//在 $keyWordsForSearch里 del 一个 列的 title ,表示用户 取消了一个 搜索某列的 状态 ,&& 开始 重新按现有的 搜索关键词搜索
export const delSearchKey = 'delSearchKey';
export const delSearchKeyAction = BaseActions.createBaseAction(delSearchKey);

//del $keyWordsForSearch里 所有 的 数据 ,表示用户 取消了 所有 某列的 搜索中状态 ,&& 开始 重新按所有列都未在搜索中状态
export const reloadAntTable = 'reloadAntTable';
export const reloadAntTableAction = BaseActions.createBaseAction(reloadAntTable);

//改 filterDropdownVisible 这个bool
export const filterDropdownVisible = 'filterDropdownVisible';
export const filterDropdownVisibleAction = BaseActions.createBaseAction(filterDropdownVisible);

//是否显示 表单modal
export const showFormModal = 'showFormModal';
export const showFormModalAction = BaseActions.createBaseAction(showFormModal);

//展开|收起某行的事件
export const changeRowStatus = 'changeRawStatus';
export const changeRowStatusAction = BaseActions.createBaseAction(changeRowStatus);



