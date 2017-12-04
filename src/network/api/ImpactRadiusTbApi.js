/**
 * ImpactRadiusTbApi.js
 * ImpactRadius 页面的tb的 api
 */
import networkTransactionsApi from './networkTransactionsApi'

export default {
    apiName:'ImpactRadiusTbApi',

    fetchTbDataApi(props){
        return (dispatch) => {
            dispatch(networkTransactionsApi.fetchNetworkTransactionTbApi(props));
        }
    }
}