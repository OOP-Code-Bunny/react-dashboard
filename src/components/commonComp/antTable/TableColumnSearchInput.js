/**
 * TableColumnSearchInput.js
 * antTable 的 列头 上 弹出的 搜索输入控件
 */

import React, {Component} from 'react';
import {Table, Input, Button, Icon} from 'antd'
import './tableSearchColumnStyle.css'


export default class TableColumnSearchInput extends Component {

    constructor(props) {
        super(props);
        Object.gLog('TableColumnSearchInput constructor ')
    }

    state = {
        // filterDropdownVisible: false,
        // data: this.data,
        searchText: this.props.searchText,
        // filtered: false,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            searchText: nextProps.searchText,
        });
    }

    //此控件在消失后没有卸载
    componentWillUnmount() {
        Object.gLog('TableColumnSearchInput.js componentWillUnmount')
    }

    /**
     * 用户在 当前 选择的列头上 弹出的搜索框内 输入的 内容
     * @param e
     */
    onInputChange = (e) => {
        this.setState({searchText: e.target.value});
    }

    /**
     * 点击此控件的 搜索按钮,调 搜索某个 column 头部的 关键词的 API, 服务器开始 搜索, 关键词 就是 列头的 title, 可多关键词
     */
    onSearch = () => {
        if (!this.state.searchText.isNull()) {
            this.props.onSearch({
                searchText: this.state.searchText,//搜索的内容
                searchkey: this.props.data.title,//搜索的哪个列的 列头

            });
        }

    }

    //取消此列的 搜索
    onResetSearch = () => {
        if (!this.state.searchText.isNull()) {
            this.props.onResetSearch({
                resetSearchKey: this.props.data.title,//被取消 搜索的 列头

            });
        }

    }

    render() {
        const {data} = this.props;
        return (
            // data.filterDropdownVisible ? //加这个判断,会 失去  取消显示此控件时 的渐变效果
            <div className="custom-filter-dropdown">
                <Input
                    ref={ele => {
                        this.searchInput = ele //
                    }}
                    placeholder={`Search ${data.title}`}
                    value={this.state.searchText}
                    onChange={this.onInputChange}
                    onPressEnter={this.onSearch}
                />
                <Button className="searchBt" type="primary" onClick={this.onSearch}>Search</Button>
                <Button type="primary" onClick={this.onResetSearch}>ResetSearch</Button>
            </div>
            // : null
        );
    }
}


