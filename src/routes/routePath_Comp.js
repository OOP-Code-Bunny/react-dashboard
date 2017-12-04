/**
 * routePath_Comp.js
 * 所有路由的路径
 */

import LoginPage from '../components/page/login/LoginPage'
import NetworkTransactionsContent from '../components/page/NetworkTransactionsContent'

export default {
    login: {
        path: '/login',
        comp: LoginPage,
    },
    NetworkTransactions: {
        // path:'NetworkTransactions',
        linkshare: {
            path: 'networkTransactions/linkshare',
            // param:'/linkshare',
            comp: NetworkTransactionsContent,
            param: {
                id: 1
            }
        },
        cj: {
            path: 'networkTransactions/cj',
            // param:'/cj',
            comp: NetworkTransactionsContent,
            param: {
                id: 2
            }
        },
        Amazon: {
            path: 'networkTransactions/Amazon',
            comp: NetworkTransactionsContent,
            param: {
                id: 3
            }
        },
        Inquiry: {
            path: 'networkTransactions/Inquiry',
            comp: NetworkTransactionsContent,
            param: {
                id: 5
            }
        },
        Ebay: {
            path: 'networkTransactions/Ebay',
            comp: NetworkTransactionsContent,
            param: {
                id: 6
            }
        },
        Pepperjam: {
            path: 'networkTransactions/Pepperjam',
            comp: NetworkTransactionsContent,
            param: {
                id: 8
            }
        },
        ShareASale: {
            path: 'networkTransactions/ShareASale',
            comp: NetworkTransactionsContent,
            param: {
                id: 10
            }
        },
        ImpactRadius: {
            path: 'networkTransactions/ImpactRadius',
            comp: NetworkTransactionsContent,
            param: {
                id: 11
            }
        },
        Skimlinks: {
            path: 'networkTransactions/Skimlinks',
            comp: NetworkTransactionsContent,
            param: {
                id: 12
            }
        },
        Zanox: {
            path: 'networkTransactions/Zanox',
            comp: NetworkTransactionsContent,
            param: {
                id: 13
            }
        },
        Webgains: {
            path: 'networkTransactions/Webgains',
            comp: NetworkTransactionsContent,
            param: {
                id: 14
            }
        },
        AffiliateWindow: {
            path: 'networkTransactions/AffiliateWindow',
            comp: NetworkTransactionsContent,
            param: {
                id: 15
            }
        },
        AvantLink: {
            path: 'networkTransactions/AvantLink',
            comp: NetworkTransactionsContent,
            param: {
                id: 16
            }
        },
        ChineseAN: {
            path: 'networkTransactions/ChineseAN',
            comp: NetworkTransactionsContent,
            param: {
                id: 17
            }
        },
        PerformanceHorizon: {
            path: 'networkTransactions/PerformanceHorizon',
            comp: NetworkTransactionsContent,
            param: {
                id: 18
            }
        },
        BlueNile: {
            path: 'networkTransactions/BlueNile',
            comp: NetworkTransactionsContent,
            param: {
                id: 19
            }
        },
        Adways: {
            path: 'networkTransactions/Adways',
            comp: NetworkTransactionsContent,
            param: {
                id: 20
            }
        },
        LinkTech: {
            path: 'networkTransactions/LinkTech',
            comp: NetworkTransactionsContent,
            param: {
                id: 22
            }
        },
        Duomai:{
            path: 'networkTransactions/Duomai',
            comp: NetworkTransactionsContent,
            param: {
                id: 23
            }
        },
    },
    generalTransactions:{
        path: 'generalTransactions',
        comp: NetworkTransactionsContent,
        param: {
            id: 100
        }
    },
    Purchase:{
        ReviewPurchase: {
            path: 'purchase/reviewPurchase',
            comp: NetworkTransactionsContent,
            param: {
                id: 101
            }
        },
        ConfirmedPurchase:{
            path: 'purchase/ConfirmedPurchase',
            comp: NetworkTransactionsContent,
            param: {
                id: 102
            }
        }
    },
    Tools:{
        DownloadNetworkTransactions: {
            path: 'Tools/DownloadNetworkTransactions',
            comp: NetworkTransactionsContent,
            param: {
                id: 103
            }
        },
        AddInquiries:{
            path: 'Tools/AddInquiries',
            comp: NetworkTransactionsContent,
            param: {
                id: 104
            }
        }
    },

    getNetworkTransactionsRouteParam(path){
        let param = null;
        if (!path){
            return param;
        }
        for (let m in this.NetworkTransactions) {
            if (`/${this.NetworkTransactions[m].path}` === path) {
                Object.gLog('m==' + m);
                param = this.NetworkTransactions[m].param;
                break;
            }
        }
        return param;
    }

}