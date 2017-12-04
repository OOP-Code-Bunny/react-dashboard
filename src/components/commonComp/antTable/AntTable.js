/*
 AntTable, 通用的 table
 https://ant.design/components/table-cn/#components-table-demo-ajax
 */
import React, {Component} from 'react';
import {Table, Input, Button, Icon, Popconfirm, Badge, Menu, Dropdown, Tabs} from 'antd'
import *as antTableActions from '../../../redux/action/antTableActions'
import PropTypes from 'prop-types'
import './tableSearchColumnStyle.css'
import './expandTableStyle.css'
import TableColumnSearchInput from './TableColumnSearchInput'
import antTableInitialState, {actionColumnTitle} from '../../../redux/InitialState/antTableInitialState'
import reviewPurchaseConfirmApi from '../../../network/api/reviewPurchaseConfirmApi'
import FormModal from '../modalForm/modal'
import reviewPurchaseEditSubmitApi from '../../../network/api/reviewPurchaseEditSubmitApi'
import ExpandedRowRender from '../ExpandedRowRender/ExpandedRowRender'

/**
 * 点击table 每1行的+号都会回调,绘制 之前没绘制过的控件,如果之前某行已经展开,不会再次重绘,收起后,对应的控件会卸载
 * @param record
 * @returns {XML}
 */
const expandedRowRender = (record/*被点击的+号所在行的信息*/) => {
    return <ExpandedRowRender record={record} isLoading={true}>

    </ExpandedRowRender>
}

export default class AntTable extends React.Component {
    static propTypes = {
        dataSource: PropTypes.object,//Object.gPropTypes.object.isRequired,//table的数据源
        columns: PropTypes.array,//Object.gPropTypes.array.isRequired,//table 的列的属性
        isLoading: PropTypes.bool,//Object.gPropTypes.bool,
        rowKeyCallback: PropTypes.func, //Object.gPropTypes.func,//给每行的key 赋值, https://ant.design/components/table-cn/#components-table-demo-ajax rowKey , 表格行 key 的取值，可以是字符串或一个函数
        pagination: PropTypes.object,//Object.gPropTypes.object,//用于table分页
        // https://ant.design/components/table-cn/#components-table-demo-ajax  https://ant.design/components/pagination-cn/
        scroll: PropTypes.object,//Object.gPropTypes.object,//用于横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{{ x: true, y: 300 }} https://ant.design/components/table-cn/#components-table-demo-ajax
        className: PropTypes.string,
        expandedRowRender: PropTypes.element,//https://ant.design/components/table-cn/#components-table-demo-expand
        // 用于 可展开的table,此属性赋值, 每行左边就有了+号
    };

    static defaultProps = {
        dataSource: [],
        columns: [],
        isLoading: false,
        rowKeyCallback: (record) => {
            return ''
        },
        pagination: {},
        scroll: {},
        className: '',
        expandedRowRender: null,
    };

    constructor(props) {
        super(props);
    }

    state = {
        dataSource: this.props.dataSource,//table的数据源
        columns: this.props.columns,
        pagination: this.props.pagination,//https://ant.design/components/pagination-cn/ 采用分页的形式分隔长列表，每次只加载一个页面。
        isLoading: this.props.isLoading,
        scroll: this.props.scroll,
        expandedRowRender: this.props.expandedRowRender
    };

    componentDidMount() {
        this.props.dispatch && this.props.dispatch(
            antTableActions.fetchTableDataAction(
                this.props, antTableActions.opt.init
            )
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: nextProps.isLoading,
            dataSource: nextProps.dataSource,
            pagination: nextProps.pagination,
            columns: nextProps.columns,
            scroll: nextProps.scroll
        });
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = {...this.state.pagination};
        if (pager.current !== pagination.current) {
            this.props.dispatch(
                antTableActions.changePaginationAction(
                    {
                        apiName: this.props.baseReducer.apiName,
                        pagination: pagination
                    }
                )
            );
            let self = this
            setTimeout(function () {
                //保证 self.props.baseReducer.pagination 是最新的
                self.props.dispatch(
                    antTableActions.fetchTableDataAction(
                        self.props, antTableActions.opt.refresh
                    )
                );
            }, 500);

        }
    }

    //重置antTable为初始搜索状态,取消所有列的搜索状态
    reloadAntTableState = () => {
        //取消所有列的搜索状态
        this.props.dispatch(
            antTableActions.reloadAntTableAction(
                {
                    apiName: this.props.baseReducer.apiName,
                }
            )
        );

        let self = this;
        setTimeout(function () {
            //保证 self.props.baseReducer.$keyWordsForSearch 是最新的
            self.props.dispatch(
                antTableActions.fetchTableDataAction(
                    self.props, antTableActions.opt.search
                )
            );
        }, 500);
    }

    /**
     * 搜索某个 column 头部的 关键词, 服务器搜索, 关键词 就是 列头的 title, 可多关键词
     */
    onSearch = (props) => {
        this.props.dispatch(
            antTableActions.filterDropdownVisibleAction(
                {
                    apiName: this.props.baseReducer.apiName,
                    visible: false//消失 搜索控件
                }
            )
        )

        this.props.dispatch(
            antTableActions.changePaginationAction(
                {
                    apiName: this.props.baseReducer.apiName,
                    pagination: {
                        current: 1,
                        pageSize: 10,
                        total: 0,
                    }
                }
            )
        );

        this.props.dispatch(
            antTableActions.addSearchKeyAction(
                {
                    apiName: this.props.baseReducer.apiName,
                    searchKey: props.searchkey,
                    searchText: props.searchText,
                }
            )
        );

        let self = this;
        setTimeout(function () {
            //保证 self.props.baseReducer.$keyWordsForSearch 是最新的
            self.props.dispatch(
                antTableActions.fetchTableDataAction(
                    self.props, antTableActions.opt.search
                )
            );
        }, 500);

    }

    onResetSearch = (resetSearchKey) => {
        //消失 搜索控件
        this.props.dispatch(
            antTableActions.filterDropdownVisibleAction(
                {
                    apiName: this.props.baseReducer.apiName,
                    visible: false
                }
            )
        );

        //取消某列的搜索状态
        this.props.dispatch(
            antTableActions.delSearchKeyAction(
                {
                    apiName: this.props.baseReducer.apiName,
                    resetSearchKey,
                }
            )
        );

        let self = this;
        setTimeout(function () {
            //保证 self.props.baseReducer.$keyWordsForSearch 是最新的
            self.props.dispatch(
                antTableActions.fetchTableDataAction(
                    self.props, antTableActions.opt.search
                )
            );
        }, 500);
    }

    //ReviewPurchaseTable 里点击 confirm
    onConfirm = (id) => {
        Object.gLog('AntTable.js onConfirm ' + id)

        this.props.dispatch(
            Object.gSpinModalActions.changeSpinningAction({
                spinning:true,
                apiName:''
            })
        );
        reviewPurchaseConfirmApi.api(id).then(
            () => {
                this.props.dispatch(
                    Object.gSpinModalActions.changeSpinningAction({
                        spinning:false,
                        apiName:''
                    })
                );

                this.props.dispatch(
                    antTableActions.fetchTableDataAction(
                        this.props, antTableActions.opt.search
                    )
                );
            }
        )
    }

    onEdit(id) {
        Object.gLog('AntTable.js onEdit ')
        this.props.dispatch(
            antTableActions.showFormModalAction(
                {
                    apiName: this.props.baseReducer.apiName,
                    isShow: true,
                    onEditRawID: id,
                }
            )
        )
    }

    editSumit = (value) => {
        Object.gLog('AntTable.js editSumit value==' + value);// values = {CS: undefined, newCashback: "1", Reason: "1"}
        reviewPurchaseEditSubmitApi.api(this.props.baseReducer.onEditRawID, value).then(
            () => {
                this.props.dispatch(
                    antTableActions.showFormModalAction(
                        {
                            apiName: this.props.baseReducer.apiName,
                            isShow: false,
                            onEditRawID: '',
                        }
                    )
                )
            }
        )
    }

    AddPropsToColumns() {
        //判断此列是否正在被搜索
        let isThisColumnSearching = (n) => {
            let arr = this.props.baseReducer.$keyWordsForSearch.toJS();
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].searchKey === n.title) {
                    return true;
                }
            }
            return false;
        };

        let initSearchText = (n) => {
            let arr = this.props.baseReducer.$keyWordsForSearch.toJS();
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].searchKey === n.title) {
                    return arr[i].searchText;
                }
            }
            return '';
        };

        this.state.columns.map(
            (n, i) => {
                if (n.isSearchThisColumnKey) {//此列的 列头对应的 字段 可被搜索
                    // column 头 上的 可点击的搜索icon,点击后弹出 filterDropdown 控件
                    n.filterIcon = <Icon type="search" style={{color: isThisColumnSearching(n) ? '#108ee9' : '#aaa'}}/>;
                    //点击 column头 上的 搜索icon后弹出的 Input+button,同一时间只显示一个 filterDropdown控件, 如果此控件不赋值, filterIcon
                    // 就不显示,不点击 filterIcon, filterDropdownVisible就是 false, TableColumnSearchInput 就不render
                    n.filterDropdown = (
                        <TableColumnSearchInput
                            data={n}
                            searchText={initSearchText(n)}
                            onSearch={
                                this.onSearch
                            }
                            onResetSearch={
                                this.onResetSearch
                            }
                        >
                        </TableColumnSearchInput>
                    );
                    //点击column 头 上的icon 后,是否显示 filterDropdown
                    n.filterDropdownVisible = this.props.baseReducer.filterDropdownVisible && n.title === this.props.baseReducer.filterDropdownShowByWhichColomn;
                    //点击 colum上的 搜索icon | (TableColumnSearchInput 已经显示&& 点击屏幕上 TableColumnSearchInput 之外的区域) 后 的回调
                    n.onFilterDropdownVisibleChange = (visible) => {
                        this.props.dispatch(
                            antTableActions.filterDropdownVisibleAction(
                                {
                                    apiName: this.props.baseReducer.apiName,
                                    visible: visible,
                                    filterDropdownShowByWhichColomn: n.title
                                }
                            )
                        )
                    };
                } else if (n.title === actionColumnTitle) {
                    n.render = (text, record) => {
                        return (
                            <div>
                                <Popconfirm title="Sure to confirm?" onConfirm={() => this.onConfirm(record.id)}>
                                    {/*<a href="#">confirm</a>*/}
                                    <Button
                                        type="primary"
                                        size="small"
                                        className='actionBt'
                                        // onClick={this.reloadAntTableState}
                                        disabled={false}//{this.props.baseReducer.$keyWordsForSearch.size===0}
                                        loading={false}
                                    >
                                        confirm
                                    </Button>
                                </Popconfirm>
                                <Button
                                    type="primary"
                                    size="small"
                                    onClick={() => this.onEdit(record.id)}
                                    disabled={false}//{this.props.baseReducer.$keyWordsForSearch.size===0}
                                    loading={false}
                                >
                                    edit
                                </Button>
                            </div>
                        );
                    }
                }
            }
        );
    }

    render() {
        this.AddPropsToColumns();
        return (
            <div>
                <div style={{marginBottom: 16}}>
                    <Button
                        type="primary"
                        onClick={this.reloadAntTableState}
                        disabled={false}//{this.props.baseReducer.$keyWordsForSearch.size===0}
                        loading={false}
                    >
                        ReloadTable
                    </Button>
                </div>
                <Table
                    className={this.props.className}
                    columns={this.state.columns}
                    rowKey={ (record) => {
                        return this.props.rowKeyCallback(record);
                    }
                    }
                    dataSource={this.state.dataSource}
                    pagination={this.state.pagination}
                    loading={this.state.isLoading}
                    onChange={this.handleTableChange}
                    scroll={this.state.scroll}
                    size="middle"
                    expandedRowRender={
                        this.state.columns.length > 0 && this.props.baseReducer.expandedRowApiName&& expandedRowRender//this.state.expandedRowRender
                    }
                />
                <FormModal
                    modalKey="edit"
                    visible={this.props.baseReducer.showFormModal}
                    title="UpdateCashbacks"
                    fields={this.props.baseReducer.formModalFields}
                    onOk={this.editSumit}
                    onCancel={() => {
                        this.props.dispatch(
                            antTableActions.showFormModalAction(
                                {
                                    apiName: this.props.baseReducer.apiName,
                                    isShow: false
                                }
                            )
                        )
                    }}
                    okText="提交"
                />
            </div>
        );
    }
}