/**
 * ZanoxTbApi.js
 * Zanox 页面的tb的 api
 */
import networkTransactionsApi from './networkTransactionsApi'

export default {
    apiName:'ZanoxTbApi',

    fetchTbDataApi(props){
        return (dispatch) => {
            dispatch(networkTransactionsApi.fetchNetworkTransactionTbApi(props));
        }
    }
}