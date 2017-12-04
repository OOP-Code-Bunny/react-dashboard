/*
 reviewPurchaseConfirmApi.js
 reviewPurchase页面的tb 点击 confirm 按钮的api
 */
import *as antTableActions from '../../redux/action/antTableActions'
// import createHistory from 'history/createHashHistory';
import routePath_Comp from '../../routes/routePath_Comp'
// const history = createHistory();

export default {

    /**
     * 拿 networkTransactions 里的 页面的 table的 api
     * @param props
     * @returns {function(*)}
     */
    api(confirmID){
        return new Promise(
            (resolve, reject) => {
                let url = `${Object.curRequestUrlDomain}/purchases/${confirmID}`;
                Object.gRequestUtil.PATCH(url, null,
                    {
                        status: 'CONFIRMED',
                    },
                ).then((responseData) => {
                    Object.gLog('reviewPurchaseConfirmApi.js responseData==' + responseData);
                        resolve();
                        Object.gMessage.success('confirm 成功');
                }).catch((error) => {
                    // reject(error);
                    Object.gLog('reviewPurchaseConfirmApi.js error==' + error);

                });
            }
        );
    }
}