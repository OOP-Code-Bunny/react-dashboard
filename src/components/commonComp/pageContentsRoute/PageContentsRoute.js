/**
 * 不同页面内容的路由集合, 类似 https://codesandbox.io/s/nn8x24vm60 的 App.js
 * 点击 左侧 menu, 此控件会重绘
 */
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router';
import {Layout} from 'antd'
import './pageContents.less'
import NetworkTransactionsContent from '../../page/NetworkTransactionsContent'
import PrivateRoute from '../../../routes/PrivateRoute'
import routePath_Comp from '../../../routes/routePath_Comp'

const {Content} = Layout;

export default class PageContentsRoute extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                <Content className="content">

                    {/*所有 NetworkTransactions 里的 content 对应的路由*/}
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.linkshare.path}`}//{routePath_Comp.NetworkTransactions.linkshare.path}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.cj.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Amazon.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Inquiry.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Ebay.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Pepperjam.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.ShareASale.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.ImpactRadius.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Skimlinks.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Zanox.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Webgains.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.AffiliateWindow.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.AvantLink.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.ChineseAN.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.PerformanceHorizon.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.BlueNile.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Adways.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.LinkTech.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.NetworkTransactions.Duomai.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.generalTransactions.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.Purchase.ReviewPurchase.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.Purchase.ConfirmedPurchase.path}`}
                        component={NetworkTransactionsContent}/>
                    <PrivateRoute
                        path={`${match.url}${routePath_Comp.Tools.DownloadNetworkTransactions.path}`}
                        component={NetworkTransactionsContent}/>

                    {/*当 location.pathname 是 / 时跳才 转到 /Linkshare,避免 如果当前在 http://localhost:3000/#/networkTransactions/linkshare 目录时,刷新页面,会出现 问题*/}
                    {this.props.location.pathname === '/' &&
                    <Redirect from='*' to={`${routePath_Comp.NetworkTransactions.linkshare.path}`}/>}


                </Content>
            </Switch>
        );
    }
}