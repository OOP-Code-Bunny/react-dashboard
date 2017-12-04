/**
 */
import { combineReducers } from 'redux';
import networkReducer from './networkReducer'
import linkshareTableReducer from './linkshareTableReducer'
import cjTableReducer from './cjTableReducer'
import AmazonTableReducer from './AmazonTableReducer'
import InquiryTableReducer from './InquiryTableReducer'
import EbayTableReducer from './EbayTableReducer'
import PepperjamTableReducer from './PepperjamTableReducer'
import ShareASaleTableReducer from './ShareASaleTableReducer'
import ImpactRadiusTableReducer from './ImpactRadiusTableReducer'
import SkimlinksTableReducer from './SkimlinksTableReducer'
import ZanoxTableReducer from './ZanoxTableReducer'
import WebgainsTableReducer from './WebgainsTableReducer'
import AffiliateWindowTableReducer from './AffiliateWindowTableReducer'
import AvantLinkTableReducer from './AvantLinkTableReducer'
import ChineseANTableReducer from './ChineseANTableReducer'
import PerformanceHorizonTableReducer from './PerformanceHorizonTableReducer'
import BlueNileTableReducer from './BlueNileTableReducer'
import AdwaysTableReducer from './AdwaysTableReducer'
import LinkTechTableReducer from './LinkTechTableReducer'
import DuomaiTableReducer from './DuomaiTableReducer'
import GeneralTransactionsTableReducer from './GeneralTransactionsTableReducer'
import ReviewPurchaseTableReducer from './ReviewPurchaseTableReducer'
import ConfirmedPurchaseTableReducer from './ConfirmedPurchaseTableReducer'
import RootPageContainerReducer from './RootPageContainerReducer'
import SpinModalReducer from './SpinModalReducer'
import DownloadNetworkTransactionsReducer from './DownloadNetworkTransactionsReducer'
import LoginPageReducer from './LoginPageReducer'

/**
 * 过滤action
 * @param state
 * @param action
 * @returns {boolean}
 */
export function filterActions(state,action) {
    return state.apiName === action.apiName;
} 
    
    
export default combineReducers({
    networkReducer,
    linkshareTableReducer,cjTableReducer,AmazonTableReducer,InquiryTableReducer,EbayTableReducer,PepperjamTableReducer,ShareASaleTableReducer,ImpactRadiusTableReducer,SkimlinksTableReducer,ZanoxTableReducer,WebgainsTableReducer,AffiliateWindowTableReducer,AvantLinkTableReducer,ChineseANTableReducer,PerformanceHorizonTableReducer,BlueNileTableReducer,AdwaysTableReducer,LinkTechTableReducer,DuomaiTableReducer,GeneralTransactionsTableReducer,ReviewPurchaseTableReducer,ConfirmedPurchaseTableReducer,RootPageContainerReducer,SpinModalReducer,DownloadNetworkTransactionsReducer,LoginPageReducer
});
