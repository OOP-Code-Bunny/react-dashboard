/**
 * GeneralTransactionsTbApi.js
 * GeneralTransactions 页面的tb的 api
 */
import *as antTableActions from '../../redux/action/antTableActions'

export default {
    apiName:'GeneralTransactionsTbApi',
    // url:`${Object.curEvn===0}`?'https://transactions-staging-develop.extrabux.com/api/transactions':'https://transactions.extrabux.com/api/transactions',

    fetchTbDataApi(_props){

        return (dispatch) => {

            const {props, opt} = _props;

            if (opt === antTableActions.opt.init && props.baseReducer.$dataArray.toJS().length > 0) {//tb初始化时已有数据.不请求
                return dispatch(antTableActions.successFetchDataAction({
                    apiName: props.baseReducer.apiName,
                    responseData: {
                        data: props.baseReducer.$dataArray.toJS(),
                        meta: props.baseReducer.meta/*服务器返回的 字段*/
                    },
                    opt: opt
                }));
            }

            dispatch(antTableActions.changeTbStatusAction({
                apiName: props.baseReducer.apiName,
                status: antTableActions.status.loading,
            }));

            let param='';
            if (props.baseReducer.$keyWordsForSearch.size>0){//有 搜索的参数
                props.baseReducer.$keyWordsForSearch.toJS().map(
                    (n,i)=>{
                        param+=`&${n.searchKey}=${n.searchText}`
                    }
                )
            }

            let url = `${Object.curRequestUrlDomain}/transactions?page=${props.baseReducer.pagination.current}&per_page=${props.baseReducer.pagination.pageSize}${param}`;

            Object.gRequestUtil.GET(url, null,
                null,
            ).then((responseData) => {
                dispatch(antTableActions.successFetchDataAction({
                    apiName: props.baseReducer.apiName,
                    responseData: responseData,
                    opt: opt
                }));

                // Object.gHistory.push({
                //     pathname: routePath_Comp.login.path,
                //     state: // history.location.state
                //         {
                //             from: Object.gHistory.location.state ? Object.gHistory.location.state.from : routePath_Comp.NetworkTransactions.linkshare.path
                //         }
                // })
            }).catch((error) => {
                // reject(error);
            });
        }
    }
}