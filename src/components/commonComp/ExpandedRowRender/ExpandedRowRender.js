/**
 * 每行展开后的控件
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';//https://www.npmjs.com/package/prop-types
import {Table, Row, Col, Card, Tabs, Badge, Spin} from 'antd'
import './style.css'
import ExpandedRowAction from '../../../redux/action/ExpandedRowAction'
import *as ObjectUtils from '../../../utils/ObjectUtils'
const TabPane = Tabs.TabPane;

export default class ExpandedRowRender extends Component {

    static propTypes = {
        record: PropTypes.object,//,选中行的数据
        isLoading: PropTypes.bool,
        apiName: PropTypes.string,
    };

    static defaultProps = {
        isLoading: false,
        record: null,
        apiName: ''
    };

    constructor(props) {
        super(props);

    }

    state = {
        isLoading: this.props.isLoading,
        record: this.props.record,
        apiName: this.props.record.expandedRowApiName,
        dataSource: []
    };

    componentWillMount() {

    }

    componentDidMount() {
        let self = this
        ExpandedRowAction.fetchDataAction({
            apiName: this.state.apiName,
            id: this.state.record.id
        }).then(
            (result) => {
                self.setState({
                    isLoading: false,
                    dataSource: result
                })
            }
        )
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.isLoading !== this.state.isLoading;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
        Object.gLog('ExpandedRowRender.js componentWillUnmount ')
    }

    renderDetail(n) {
        return <Card key={0} style={{width: '100%'}}>
            {
                <div className="gutter-example">
                    <Row className='ant-row' gutter={0}>
                        {
                            Object.values(n).map(
                                (value, i) => {
                                    {
                                        let key = ObjectUtils.findKeyByValue(n, value, (value) => {
                                            return value instanceof Array === false;
                                        });
                                        if (key) {
                                            // str +='\n'+`${key}:${value} `
                                            return <Col className="gutter-row" span={2}>
                                                <div className="gutter-box">{key} : {value}</div>
                                            </Col>
                                        }

                                    }

                                }
                            )
                        }
                    </Row>
                </div>
            }
        </Card>
        // return<div className="gutter-example">
        //     <Row className='ant-row' gutter={0}>
        //         {
        //             Object.values(n).map(
        //                 (value, i) => {
        //                     {
        //                         let key = ObjectUtils.findKeyByValue(n, value, (value) => {
        //                             return value instanceof Array === false;
        //                         });
        //                         if (key) {
        //                             // str +='\n'+`${key}:${value} `
        //                             return <Col className="gutter-row" span={3}>
        //                                 <div className="gutter-box">{key} : {value}</div>
        //                             </Col>
        //                         }
        //
        //                     }
        //
        //                 }
        //             )
        //         }
        //     </Row>
        // </div>
    }

    renderTabPane() {
        return (
            this.state.dataSource.map(
                (n, i) => {
                    return <TabPane tab={n.title} key={i}>
                        {
                            i === 0 ? this.renderDetail(n.data) :
                                <Table
                                    className='example'
                                    columns={n.columns}
                                    dataSource={n.data}
                                    pagination={false}
                                    scroll={
                                        {x: 1600}
                                    }
                                    bordered
                                    size="small"
                                />
                        }
                    </TabPane>

                }
            )
        )
    }


    render() {
        return (
            this.state.isLoading ?
                <Spin />
                : <Tabs defaultActiveKey="0" onChange={null}>
                {
                    this.renderTabPane()
                }
            </Tabs>

        );
    }
}