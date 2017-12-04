/**
 * ConfirmedPurchaseTableContainer.js.js
 *  ConfirmedPurchase 页面的table需要 的数据源容器
 */

import React, {Component} from 'react';
import {Table, Badge, Menu, Dropdown, Icon, Tabs} from 'antd'
import {connect} from 'react-redux';
import BizTableContainer from './BizTableContainer'
import '../../components/commonComp/antTable/expandTableStyle.css'
const TabPane = Tabs.TabPane;

@connect(
    (state) => ({
        baseReducer: state.ConfirmedPurchaseTableReducer,
    })
)

export default class ConfirmedPurchaseTableContainer extends Component {

    // static propTypes = {};
    //
    // static defaultProps = {};
    //
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <BizTableContainer
                className="components-table-demo-nested"
                {...this.props}
            />
        );

        // return <Table
        //     className="components-table-demo-nested"
        //     columns={columns}
        //     expandedRowRender={expandedRowRender}//此属性赋值, 每行左边就有了+号
        //     dataSource={data}
        // />
    }
}
