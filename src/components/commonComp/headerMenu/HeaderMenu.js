/**
 * 所有 页面 都需要的顶部 菜单控件
 */
import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
import './headerMenu.less'

const SubMenu = Menu.SubMenu
const { Header } = Layout

export default class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'admin'
        })
    }

    clear = (item) => {
        if (item.key === 'logOut') {

            this.props.clear()
        }
    }

    // screenFull = () => {
    //     if (screenfull.enabled) {
    //         screenfull.request();
    //     }
    // }
    render() {
        return (
            <Header style={{ background: '#fff',}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                {/*<span style={{marginLeft: 200}}>111</span>*/}
                <Menu mode="horizontal" className="logOut" onClick={this.clear}>
                    <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
                        <Menu.Item key="logOut"><Link to="/login" >退出</Link></Menu.Item>
                    </SubMenu>
                </Menu>
                 {/*<Icon*/}
                    {/*className="screenFull"*/}
                    {/*type="arrows-alt"*/}
                    {/*onClick={this.screenFull}*/}
                {/*/>*/}
            </Header>
        );
    }
}