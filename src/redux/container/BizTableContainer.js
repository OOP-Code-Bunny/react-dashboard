/**
 * BizTableContainer
 * 不同table实例外层包裹 的数据源容器
 */

import React, {Component} from 'react';
import AntTable from '../../components/commonComp/antTable/AntTable'
import *as antTableActions from '../action/antTableActions'

export default class BizTableContainer extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (
            <AntTable
                columns={this.props.baseReducer && this.props.baseReducer.$columns.toJS()}
                dataSource={this.props.baseReducer && this.props.baseReducer.$dataArray.toJS()}
                isLoading={this.props.baseReducer && (this.props.baseReducer.status === antTableActions.status.loading)}
                pagination={this.props.baseReducer && this.props.baseReducer.pagination}
                rowKeyCallback={
                    (record) => {
                        return record.id
                    }
                }
                scroll={
                    this.props.baseReducer.scroll
                }
                expandedRowRender={
                    this.props.baseReducer.expandedRowRender
                }
                {...this.props}/>
        );
    }
}
