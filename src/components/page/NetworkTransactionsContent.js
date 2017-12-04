/**
 * NetworkTransactionsContent 展开后 +generalTransactions 路由+ 其他用到antTable的页面+所有 右边需要的content页面 对应的 每个menu点击后 右边 通用的  content
 * 切换 左边的 menu时, 此控件会 卸载, 此控件的每个实例对应左侧 menu 点击后右边显示的 content
 */
import React from 'react';
import MultipleSelectlnput from '../commonComp/multipleSelectionOflnput/MultipleSelectlnput'
import {Spin} from 'antd';
import SingleInput from '../commonComp/singleInput/SingleInput'
import routePath_Comp from '../../routes/routePath_Comp'
import LinkshareTableContainer from '../../redux/container/LinkshareTableContainer'
import CJTableContainer from '../../redux/container/CJTableContainer'
import AmazonTableContainer from '../../redux/container/AmazonTableContainer'
import InquiryTableContainer from '../../redux/container/InquiryTableContainer'
import EbayTableContainer from '../../redux/container/EbayTableContainer'
import PepperjamTableContainer from '../../redux/container/PepperjamTableContainer'
import ShareASaleTableContainer from '../../redux/container/ShareASaleTableContainer'
import ImpactRadiusTableContainer from '../../redux/container/ImpactRadiusTableContainer'
import SkimlinksTableContainer from '../../redux/container/SkimlinksTableContainer'
import ZanoxTableContainer from '../../redux/container/ZanoxTableContainer'
import WebgainsTableContainer from '../../redux/container/WebgainsTableContainer'
import AffiliateWindowTableContainer from '../../redux/container/AffiliateWindowTableContainer'
import AvantLinkTableContainer from '../../redux/container/AvantLinkTableContainer'
import ChineseANTableContainer from '../../redux/container/ChineseANTableContainer'
import PerformanceHorizonTableContainer from '../../redux/container/PerformanceHorizonTableContainer'
import BlueNileTableContainer from '../../redux/container/BlueNileTableContainer'
import AdwaysTableContainer from '../../redux/container/AdwaysTableContainer'
import LinkTechTableContainer from '../../redux/container/LinkTechTableContainer'
import DuomaiTableContainer from '../../redux/container/DuomaiTableContainer'
import GeneralTransactionsTableContainer from '../../redux/container/GeneralTransactionsTableContainer'
import ReviewPurchaseTableContainer from '../../redux/container/ReviewPurchaseTableContainer'
import ConfirmedPurchaseTableContainer from '../../redux/container/ConfirmedPurchaseTableContainer'
import DownloadNetworkTransactionsPage from './DownloadNetworkTransactionsPage/DownloadNetworkTransactionsPage'
import SpinModal from '../commonComp/SpinModal/SpinModal'

export default class NetworkTransactionsContent extends React.Component {

    state = {
        inputArr: [],
    }

    componentDidMount() {
        const {match} = this.props;

    }

    componentWillUnmount() {
        const {match} = this.props;
        Object.gLog('NetworkTransactionsContent.js componentWillUnmount')
    }

    //根据不同的param ,传不同的 table的 container
    filterContainer() {
        const {match} = this.props;

        if (match.path === `/${routePath_Comp.generalTransactions.path}`) {
            return <GeneralTransactionsTableContainer param={routePath_Comp.generalTransactions.param} >
            </GeneralTransactionsTableContainer>
        }else if (match.path === `/${routePath_Comp.Purchase.ReviewPurchase.path}`){
            return <ReviewPurchaseTableContainer param={routePath_Comp.Purchase.ReviewPurchase.param} >
            </ReviewPurchaseTableContainer>
        }else if (match.path === `/${routePath_Comp.Purchase.ConfirmedPurchase.path}`){
            return <ConfirmedPurchaseTableContainer param={routePath_Comp.Purchase.ConfirmedPurchase.param} >
            </ConfirmedPurchaseTableContainer>
        }
        else if (match.path === `/${routePath_Comp.Tools.DownloadNetworkTransactions.path}`){
            return <DownloadNetworkTransactionsPage param={routePath_Comp.Tools.DownloadNetworkTransactions.param} {...this.props}>
            </DownloadNetworkTransactionsPage>
        }

        switch (routePath_Comp.getNetworkTransactionsRouteParam(match.path).id) {
            case routePath_Comp.NetworkTransactions.linkshare.param.id: {
                return <LinkshareTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </LinkshareTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.cj.param.id: {
                return <CJTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </CJTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Amazon.param.id: {
                return <AmazonTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </AmazonTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Inquiry.param.id: {
                return <InquiryTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </InquiryTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Ebay.param.id: {
                return <EbayTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </EbayTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Pepperjam.param.id: {
                return <PepperjamTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </PepperjamTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.ShareASale.param.id: {
                return <ShareASaleTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </ShareASaleTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.ImpactRadius.param.id: {
                return <ImpactRadiusTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </ImpactRadiusTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Skimlinks.param.id: {
                return <SkimlinksTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </SkimlinksTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Zanox.param.id: {
                return <ZanoxTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </ZanoxTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Webgains.param.id: {
                return <WebgainsTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </WebgainsTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.AffiliateWindow.param.id: {
                return <AffiliateWindowTableContainer
                    param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </AffiliateWindowTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.AvantLink.param.id: {
                return <AvantLinkTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </AvantLinkTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.ChineseAN.param.id: {
                return <ChineseANTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </ChineseANTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.PerformanceHorizon.param.id: {
                return <PerformanceHorizonTableContainer
                    param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </PerformanceHorizonTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.BlueNile.param.id: {
                return <BlueNileTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </BlueNileTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Adways.param.id: {
                return <AdwaysTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </AdwaysTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.LinkTech.param.id: {
                return <LinkTechTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </LinkTechTableContainer>
            }
                break;
            case routePath_Comp.NetworkTransactions.Duomai.param.id: {
                return <DuomaiTableContainer param={routePath_Comp.getNetworkTransactionsRouteParam(match.path)}>
                </DuomaiTableContainer>
            }
                break;
            default: {

            }
        }
    }

    render() {
        const {match} = this.props;
        return (
            <div style={{/*height:100backgroundColor:'#aad'*/}}>
                {/*<MultipleSelectlnput style={{width: '70%', marginRight: 20}}*/}
                {/*selectCallback={*/}
                {/*(arr) => {*/}
                {/*Object.gLog('NetworkTransactionsContent.js selectCallback arr==' + arr);*/}
                {/*this.setState({*/}
                {/*inputArr: arr*/}
                {/*})*/}
                {/*}*/}
                {/*}*/}
                {/*>*/}
                {/*</MultipleSelectlnput>*/}
                {/*<Button type="primary" icon="search" style={{marginRight: 20}}>Search</Button>*/}
                {/*<Button type="primary" icon="reSet" style={{marginRight: 0}}>Reset</Button>*/}
                {/*<br/>*/}
                {/*{*/}
                {/*this.state.inputArr.map(*/}
                {/*(model, i) => {*/}
                {/*return <SingleInput style={{width: 100,margin:10}} placeholder={`${model}`}>*/}
                {/*</SingleInput>*/}
                {/*}*/}
                {/*)*/}
                {/*}*/}
                <SpinModal>
                    {
                        this.filterContainer()
                    }
                </SpinModal>

            </div>
        )
    }
}
// export default NetworkTransactionsContent;