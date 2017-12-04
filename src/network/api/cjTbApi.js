/**
 * cjTbApi.js
 * CJ 页面的tb的 api
 */
import *as antTableActions from '../../redux/action/antTableActions'
import networkTransactionsApi from './networkTransactionsApi'

export default {
    apiName:'cjTbApi',

    fetchTbDataApi(props){
        return (dispatch) => {
            dispatch(networkTransactionsApi.fetchNetworkTransactionTbApi(props));
        }
    }
}