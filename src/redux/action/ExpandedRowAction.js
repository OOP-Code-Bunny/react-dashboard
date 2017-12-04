import *as BaseActions from './BaseActions'
import ConfirmedPurchaseDetailApi from '../../network/api/ConfirmedPurchaseDetailApi'
import networkTransactionsAllTbDetailApi from '../../network/api/networkTransactionsAllTbDetailApi'
import linkshareTbApi from '../../network/api/linkshareTbApi'
import routePath_Comp from '../../routes/routePath_Comp'

export default {
    fetchDataAction(props){
        switch (props.apiName){
            // case linkshareTbApi.apiName:{
            //     return networkTransactionsAllTbDetailApi.api(routePath_Comp.NetworkTransactions.linkshare.param.id,props.id)
            // }
            // break;
            case ConfirmedPurchaseDetailApi.apiName:{
                return ConfirmedPurchaseDetailApi.fetchDetailApi(props)
            }
            break;
        }
    }
}
