/**
 * WebgainsTbApi.js
 * Webgains 页面的tb的 api
 */
import networkTransactionsApi from './networkTransactionsApi'

export default {
    apiName:'WebgainsTbApi',

    fetchTbDataApi(props){
        return (dispatch) => {
            dispatch(networkTransactionsApi.fetchNetworkTransactionTbApi(props));
        }
    }
}