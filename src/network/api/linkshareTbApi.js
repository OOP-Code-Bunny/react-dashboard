/**
 * linkshareTbApi.js
 * linkshare 页面的tb的 api
 */
import *as antTableActions from '../../redux/action/antTableActions'
import networkTransactionsApi from './networkTransactionsApi'

export default {
    apiName:'linkshareTbApi',

    fetchTbDataApi(props){
        return (dispatch) => {
            dispatch(networkTransactionsApi.fetchNetworkTransactionTbApi(props));
            // return networkTransactionsApi.fetchNetworkTransactionTbApi(props);
        }
    },

}