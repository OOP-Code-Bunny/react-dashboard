/**
 * LinkshareTableContainer.js
 * Linkshare页面的table需要 的数据源容器
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import BizTableContainer from './BizTableContainer'

@connect(
    (state) => ({
        baseReducer: state.linkshareTableReducer,
    })
)

export default class LinkshareTableContainer extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <BizTableContainer
                {...this.props}/>
        );
    }
}
