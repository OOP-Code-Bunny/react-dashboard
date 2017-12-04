/**
 * ConfirmedPurchaseDetailApi.js
 * ConfirmedPurchase 页面的tb的 某行展开后,对应显示的控件需要的 api
 */
export default {
    apiName: 'ConfirmedPurchaseDetailApi',
    // url: `${Object.curRequestUrlDomain}/purchases`,

    fetchDetailApi(props){

        return new Promise(
            (resolve, reject) => {
                let url = `${Object.curRequestUrlDomain}/purchases?id=${props.id}&embeds=cashbacks,transactions`;

                Object.gRequestUtil.GET(url, null,
                    null,
                ).then((responseData) => {
                    Object.gLog('')
                    if (responseData.data.length > 0) {
                        let data = responseData.data[0];
                        let result = [];
                        result.push({
                            title:'detail',
                            data:data,
                        });
                        if (data.cashbacks && data.cashbacks.length > 0) {
                            let _columns = [];
                            Object.keys(data.cashbacks[0]).map(
                                (key, i) => {
                                    if (key !== null) {
                                        _columns.push({
                                            title: key,
                                            dataIndex: key,
                                            key: key
                                        })
                                    }
                                }
                            )

                            result.push({
                                title: 'cashbacks',
                                data: data.cashbacks,
                                columns: _columns
                            });
                        }
                        if (data.transactions && data.transactions.length > 0) {
                            let _columns = [];
                            Object.keys(data.transactions[0]).map(
                                (key, i) => {
                                    if (key !== null) {
                                        _columns.push({
                                            title: key,
                                            dataIndex: key,
                                            key: key
                                        })
                                    }
                                }
                            )

                            result.push({
                                title: 'transactions',
                                data: data.transactions,
                                columns: _columns
                            });
                        }
                        resolve(result);
                    }
                }).catch((error) => {
                    reject(error);
                });
            }
        );
    }
}