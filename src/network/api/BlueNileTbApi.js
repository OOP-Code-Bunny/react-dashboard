/**
 * BlueNileTbApi.js
 * BlueNile 页面的tb的 api
 */
import networkTransactionsApi from './networkTransactionsApi'

export default {
    apiName:'BlueNileTbApi',

    fetchTbDataApi(props){
        return (dispatch) => {
            dispatch(networkTransactionsApi.fetchNetworkTransactionTbApi(props));
        }
    }
}