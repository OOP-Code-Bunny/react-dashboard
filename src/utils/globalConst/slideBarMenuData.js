/*
 左侧 菜单栏 的数据源
 */
import routePath_Comp from '../../routes/routePath_Comp'

export const slideBarMenuData = [
    {
        name: 'Network Transactions',
        url: 'networkTransactions',
        icon: 'bars',
        children: [
            {
                name: 'Linkshare', url: routePath_Comp.NetworkTransactions.linkshare.path,
            },
            {
                name: 'CJ', url: routePath_Comp.NetworkTransactions.cj.path,
            },
            {
                name: 'Amazon', url: routePath_Comp.NetworkTransactions.Amazon.path,
            },
            {
                name: 'Inquiry', url: routePath_Comp.NetworkTransactions.Inquiry.path,
            },
            {
                name: 'Ebay', url: routePath_Comp.NetworkTransactions.Ebay.path,
            },
            {
                name: 'Pepperjam', url: routePath_Comp.NetworkTransactions.Pepperjam.path,
            },
            {
                name: 'ShareASale', url: routePath_Comp.NetworkTransactions.ShareASale.path,
            },
            {
                name: 'ImpactRadius', url: routePath_Comp.NetworkTransactions.ImpactRadius.path,
            },
            {
                name: 'Skimlinks', url: routePath_Comp.NetworkTransactions.Skimlinks.path,
            },
            {
                name: 'Zanox', url: routePath_Comp.NetworkTransactions.Zanox.path,
            },
            {
                name: 'Webgains', url: routePath_Comp.NetworkTransactions.Webgains.path,
            },
            {
                name: 'AffiliateWindow', url: routePath_Comp.NetworkTransactions.AffiliateWindow.path,
            },
            {
                name: 'AvantLink', url: routePath_Comp.NetworkTransactions.AvantLink.path,
            },
            {
                name: 'ChineseAN', url: routePath_Comp.NetworkTransactions.ChineseAN.path,
            },
            {
                name: 'PerformanceHorizon', url: routePath_Comp.NetworkTransactions.PerformanceHorizon.path,
            },
            {
                name: 'BlueNile', url: routePath_Comp.NetworkTransactions.BlueNile.path,
            },
            {
                name: 'Adways', url: routePath_Comp.NetworkTransactions.Adways.path,
            },
            {
                name: 'LinkTech', url: routePath_Comp.NetworkTransactions.LinkTech.path,
            },
            {
                name: 'Duomai', url: routePath_Comp.NetworkTransactions.Duomai.path,
            },
        ]
    },
    {
        name: 'GeneralTransactions',
        url: 'generalTransactions',
        icon: 'tool',
    },
    {
        name: 'Purchase',
        url: 'purchase',
        icon: 'tool',
        children: [
            {
                name: 'ReviewPurchase', url: routePath_Comp.Purchase.ReviewPurchase.path,
            },
            {
                name: 'ConfirmedPurchase', url: routePath_Comp.Purchase.ConfirmedPurchase.path,
            },
        ]
    },
    {
        name: 'Tools',
        url: 'Tools',
        icon: 'tool',
        children: [
            {
                name: 'DownloadNetworkTransactions', url: routePath_Comp.Tools.DownloadNetworkTransactions.path,
            },
            {
                name: 'AddInquiries', url: routePath_Comp.Tools.AddInquiries.path,
            },
        ]
    }
];