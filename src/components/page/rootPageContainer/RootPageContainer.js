/*
 所有 已登录 类型的页面的 基础UI 框架, 也就是 左边都有 slider, 右边 显示 点击某个 item 后对应的 view
 */

import React, {Component,DeviceEventEmitter} from 'react';
import {Link} from 'react-router-dom'
import {Menu, Icon, Spin, Layout} from 'antd'
import *as slideBarMenuData from '../../../utils/globalConst/slideBarMenuData'
import HeaderMenu from '../../commonComp/headerMenu/HeaderMenu'
import PageContentsRoute from '../../commonComp/pageContentsRoute/PageContentsRoute'
// import Footer from './bottom'
import './rootPageContainer.less'
// import SiderCustom from '../../commonComp/SiderCustom'
import routePath_Comp from '../../../routes/routePath_Comp'
import {connect} from 'react-redux';
import SpinModal from '../../commonComp/SpinModal/SpinModal'


const SubMenu = Menu.SubMenu;
const {Sider} = Layout

@connect(
    (state) => ({
        baseReducer: state.RootPageContainerReducer,
    })
)


export default class RootPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        theme: 'dark',
        current:this.props.location.pathname.substring(1, this.props.location.pathname.length),//'index',
        collapsed: false,
        mode: 'inline',  // 水平垂直展现
    }

    componentDidMount() {
        this.handleClick([], this.props.location.pathname.substring(1, this.props.location.pathname.length))
    }

    componentWillUnmount() {

        // if (this.changeCurrentEventListener) {
        //     this.changeCurrentEventListener.removeEventListener();
        // }

    }

    componentWillReceiveProps(nextProps) {
        Object.gLog(nextProps);
        if (this.state.current!==nextProps.location.pathname.substring(1, nextProps.location.pathname.length)){
            this.setState({
                current:nextProps.location.pathname.substring(1, nextProps.location.pathname.length)
            });
        }

    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            mode: this.state.collapsed ? 'inline' : 'vertical',
        });
    }
    clear = () => {
        Object.gStore.remove(Object.gTokenKey);

        this.setState({
            current:routePath_Comp.NetworkTransactions.linkshare.path //'index',
        });
        // this.props.dispatch(
        //     rootPageContainerActions.changeCurrentSelectMenuAction({
        //         currentSelectMenu:routePath_Comp.NetworkTransactions.linkshare.path
        //     })
        // )
    }
    handleClick = (e, special) => {
        if (this.state.current!==(e.key || special)){
            this.setState({
                current: e.key || special,
            });
        }

    }

    render() {
        const {match} = this.props;
        let self=this;
        return (
            <div>
                {/*不能把 Layout 放到 Spin 里*/}
                {/*<Spin spinning={false}>*/}
                    {/**/}
                {/*</Spin>*/}
                <Layout className="containAll">
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        className="leftMenu"
                    >
                        <Menu
                            theme={this.state.theme}
                            onClick={this.handleClick}
                            defaultOpenKeys={['']}
                            selectedKeys={[this.state.current]}
                            className="menu"
                            mode={this.state.mode}
                        >
                            {
                                slideBarMenuData.slideBarMenuData.map((subMenu) => {
                                    if (subMenu.children && subMenu.children.length) {
                                        return (
                                            <SubMenu key={subMenu.url} title={<span><Icon
                                                type={subMenu.icon}/><span>{subMenu.name}</span></span>}>
                                                {subMenu.children.map(menu => (
                                                    <Menu.Item key={menu.url}><Link
                                                        to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                                                ))}
                                            </SubMenu>
                                        )
                                    }
                                    return (
                                        <Menu.Item key={subMenu.url}>
                                            <Link to={`/${subMenu.url}`}>
                                                <Icon type={subMenu.icon}/><span className="nav-text">{subMenu.name}</span>
                                            </Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout>
                        <HeaderMenu toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear}/>
                        <PageContentsRoute match={this.props.match} {...this.props}/>
                        {/*<SpinModal></SpinModal>*/}
                    </Layout>
                </Layout>
            </div>

        );
    }
}
