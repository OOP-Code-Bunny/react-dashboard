/**
 * ChineseANTableContainer.js
 *  ChineseAN 页面的table需要 的数据源容器
 */

import React, {Component} from 'react';
import {Table, Input, Button, Icon} from 'antd'
import {connect} from 'react-redux';
import BizTableContainer from './BizTableContainer'

@connect(
    (state) => ({
        baseReducer: state.ChineseANTableReducer,
    })
)

export default class ChineseANTableContainer extends Component {

    // static propTypes = {};
    //
    // static defaultProps = {};
    //
    constructor(props) {
        super(props);
    }

    //
    componentDidMount() {

    }

    render() {
        return (
            <BizTableContainer
                {...this.props}/>
        );
    }
}
