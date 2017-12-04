/**
 * SkimlinksTbApi.js
 * Skimlinks 页面的tb的 api
 */
import networkTransactionsApi from './networkTransactionsApi'

export default {
    apiName:'SkimlinksTbApi',

    fetchTbDataApi(props){
        return (dispatch) => {
            dispatch(networkTransactionsApi.fetchNetworkTransactionTbApi(props));
        }
    }
}