/**
 * DownloadNetworkTransactionsApi.js
 * DownloadNetworkTransactions 页面的  api
 */

export default {
    apiName: 'DownloadNetworkTransactionsApi',

    api(param){

        return new Promise(
            (resolve, reject) => {
                let url = `${Object.curRequestUrlDomain}/synchronizations`;

                Object.gRequestUtil.POST(url, null,
                    {
                        networkId: param.Network,
                        reportStart:param.StartDate.format(),
                        reportEnd:param.EndDate.format()
                    },
                ).then((responseData) => {
                    Object.gLog('')
                    resolve();
                }).catch((error) => {
                    reject(error);
                });
            }
        );
    }
}