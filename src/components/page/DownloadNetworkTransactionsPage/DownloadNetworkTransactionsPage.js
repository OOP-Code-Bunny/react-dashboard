/**
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';//https://www.npmjs.com/package/prop-types
import {Select, Button} from 'antd';
// import *as slideBarMenuData from '../../utils/globalConst/slideBarMenuData'
import routePath_Comp from '../../../routes/routePath_Comp'
import Form from '../../commonComp/modalForm/form'
import './style.css'
import *as ObjectUtils from '../../../utils/ObjectUtils'
import DownloadNetworkTransactionsApi from '../../../network/api/DownloadNetworkTransactionsApi'
import {connect} from 'react-redux';
@connect(
    (state) => ({
        baseReducer: state.DownloadNetworkTransactionsReducer,
    })
)

export default class DownloadNetworkTransactionsPage extends Component {

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

    onOk(param,self) {
        Object.gLog(param.EndDate.format());
        self.props.dispatch(
            Object.gSpinModalActions.changeSpinningAction({
                spinning:true,
                apiName:''
            })
        );
        DownloadNetworkTransactionsApi.api(param).then(
            () => {
                let path = null;
                let arr = Object.values(routePath_Comp.NetworkTransactions);
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].param.id.toString() === param.Network) {
                        path = arr[i].path;
                        break;
                    }
                }

                self.props.dispatch(
                    Object.gSpinModalActions.changeSpinningAction({
                        spinning:false,
                        apiName:''
                    })
                )

                Object.gHistory.push(
                    {
                        pathname: `/${path}`,
                        state: Object.gHistory.state
                    }
                )
            }
        )
    }

    render() {
        return <Form
            fields={[
                {
                    label: 'Network',
                    type: 'select',
                    name: 'Network',
                    placeholder: '',
                    items: () => Object.values(routePath_Comp.NetworkTransactions).map(ele => ({
                        key: ele.param.id,
                        value: ObjectUtils.findKeyByValue(routePath_Comp.NetworkTransactions, ele, (ele) => {
                            return true
                        })
                    })),
                    options: {
                        rules: [{
                            required: true,
                            message: '必填',
                        }]
                    }
                },
                {
                    label: 'StartDate',
                    type: 'datetime',
                    name: 'StartDate',
                    placeholder: '请选择起始时间',
                    options: {
                        rules: [{
                            required: true,
                            message: '必填!',
                        }]
                    }
                }, {
                    label: 'EndDate',
                    type: 'datetime',
                    name: 'EndDate',
                    placeholder: '请选择结束时间',
                    options: {
                        rules: [{
                            required: true,
                            message: '必填!',
                        }]
                    }
                }
            ]}
            onOk={(param) => {
                this.onOk(param, this)
            }
            }
            onCancel={null}
            okText='提交'
        />;
    }
}
