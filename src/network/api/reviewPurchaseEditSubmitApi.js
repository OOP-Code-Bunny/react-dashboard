/*
 reviewPurchaseEditSubmitApi.js
 reviewPurchase页面的tb 点击 edit 按钮后的提交的api
 */
import *as antTableActions from '../../redux/action/antTableActions'
// import createHistory from 'history/createHashHistory';
import routePath_Comp from '../../routes/routePath_Comp'
// const history = createHistory();

export default {

    /**
     * @param props
     * @returns {function(*)}
     */
    api(confirmID, body){
        return new Promise(
            (resolve, reject) => {
                let url = `${Object.curRequestUrlDomain}/purchases/${confirmID}`;
                Object.gRequestUtil.PATCH(url, null,
                    {
                        cashbacks: [{
                            amount: body.amount,
                            notes: body.notes
                        }]
                    },
                ).then((responseData) => {
                    Object.gLog('reviewPurchaseEditSubmitApi.js responseData==' + responseData);
                    resolve();
                    Object.gMessage.success('提交 成功');
                }).catch((error) => {
                    // reject(error);
                    Object.gLog('reviewPurchaseEditSubmitApi.js error==' + error);

                });
            }
        );
    }
}