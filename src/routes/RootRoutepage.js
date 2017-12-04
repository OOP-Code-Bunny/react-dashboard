/**
 * RootRoutepage ,根路由的容器,暂时没用
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';//https://www.npmjs.com/package/prop-types

export default class RootRoutepage extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

    }

    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                {this.props.children}
            </div>
        );
    }
}