/**
 * Created by Ebates on 16/12/2.
 * globalVar.js
 * 全局变量, 此文件 只需 被import 一次, 刷新页面才会重新加载此文件
 */
import PropTypes from 'prop-types'
import  Log from '../Log'
import StringOauth from '../StringOauth'
// import createBrowserHistory from 'history/createBrowserHistory'//暂时不能注释,否则在登录页面时,会报错
// import fetchJsonp from 'fetch-jsonp'
import store from 'store'
import ArrayUtils from '../ArrayUtils'
import *as requestUtil from '../../network/requestUtil'
import createHistory from 'history/createHashHistory';
import {message} from 'antd';
import SpinModalActions from '../../redux/action/SpinModalActions'

/**
 *
 * eg:
     Object.gHistory.push(
     {
         pathname: `/${path}`,
         state: Object.gHistory.state
     }
     )
 */
Object.prototype.gHistory = createHistory();
Object.prototype.gLog=(str)=>{
    Log.log(str);
}
Object.prototype.gWriteObjToJson=(obj)=>{
    Log.writeObjToJson(obj);
}
// Object.prototype.customHistory = createBrowserHistory();//暂时不能注释,否则在登录页面时,会报错
Object.prototype.token=null;
Object.prototype.admin_id='admin_id';
// Object.prototype.gFetchJsonp=fetchJsonp;
Object.prototype.curEvn=1//当前的网络环境, 0: dev  1:production
Object.prototype.curRequestUrlDomain=Object.curEvn===0?'https://transactions-staging-develop.extrabux.com/api':'https://transactions.extrabux.com/api';
Object.prototype.gStore=store;
Object.prototype.gTokenKey='gTokenKey';//token缓存时的key
Object.prototype.gTokenExpiredTime=60*60*1*1000;//1 小时 后过期
Object.prototype.gRequestUtil=requestUtil;
Object.prototype.gMessage=message;
Object.prototype.gSpinModalActions=SpinModalActions;

