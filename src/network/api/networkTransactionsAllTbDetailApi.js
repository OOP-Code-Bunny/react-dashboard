/*
 networkTransactionsAllTbDetailApi.js
 networkTransactions里所有页面的tb的 详情的api
 */
import *as ObjectUtils from '../../utils/ObjectUtils'

 export default {
     apiName:'networkTransactionsAllTbDetailApi',
     /**
      * NetworkTransactions table 的详情的 url
      * @param id 哪个tb
      * @param _transactionId  哪一行
      * @returns {string}
      */
     getNetworkTransactionsDetailUrl(id,_transactionId){
         return `${Object.curRequestUrlDomain}/networks/${id}/transactions/${_transactionId}`
     },

     api(id,_transactionId){
         return new Promise(
             (resolve,reject)=>{
                 Object.gRequestUtil.GET(this.getNetworkTransactionsDetailUrl(id,_transactionId), null,
                     null,
                 ).then((responseData) => {
                     Object.gLog('');
                     let data =  responseData.data instanceof Array === true ? responseData.data[0]: responseData.data;
                     let result=[];
                     data&&Object.values(data).map(
                         (value , i) => {
                             {
                                 let key = ObjectUtils.findKeyByValue(data, value, (n) => {
                                     return n instanceof Array === false;
                                 });
                                 if (!key){
                                     data.remove(value);
                                 }
                             }

                         }
                     );
                     result.push({
                         title:'detail',
                         data:data,
                     });
                     resolve(result);

                 }).catch((error) => {
                     reject(error);
                 });
             }
         )
     }
 }