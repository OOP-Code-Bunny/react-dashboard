/*
 linkshareTableActions.js
 */
import {createAction} from 'redux-actions'
import *as antTableActions from './antTableActions'

// export const fetchTableData = 'fetchTableData/linkshareTable';
// export function fetchTableDataAction(props) {
//     // Thunk middleware 知道如何处理函数。
//     // 这里把 dispatch 方法通过参数的形式传给函数，
//     // 以此来让它自己也能 dispatch action。
//     return function (dispatch) {
//         // 首次 dispatch：更新应用的 state 来通知
//         // API 请求发起了。
//         dispatch(changeLinkshareTbStatusAction(antTableActions.status.loading));
//
//         // thunk middleware 调用的函数可以有返回值，
//         // 它会被当作 dispatch 方法的返回值传递。
//         // 这个案例中，我们返回一个等待处理的 promise。
//         // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
//         // 在实际应用中，还需要
//         // 捕获网络请求的异常。
//         return new Promise(function (resolve, reject) {
//             Object.gRequestUtil.GET(`${Object.curRequestUrlDomain}/networks/${props.param.id}/transactions?page=${props.baseReducer.pagination.current}&per_page=${props.baseReducer.pagination.pageSize}`, null,
//                 null,
//             ).then((responseData) => {
//                 dispatch(linkshareTbSuccessFetchDataAction(responseData));
//             }).catch((error) => {
//                 reject(error);
//             });
//         });
//     }
// }

// export const linkshareTbSuccessFetchData='linkshareTbSuccessFetchData';
// export const linkshareTbSuccessFetchDataAction=createAction(linkshareTbSuccessFetchData);
//
// //改变 linkshare页面里的 tb的 Pagination
// export const changeLinkshareTbPagination='changeLinkshareTbPagination';
// export const changeLinkshareTbPaginationAction=createAction(changeLinkshareTbPagination);
//
// export const changeLinkshareTbStatus='changeLinkshareTbStatus';
// export const changeLinkshareTbStatusAction=createAction(changeLinkshareTbStatus);
