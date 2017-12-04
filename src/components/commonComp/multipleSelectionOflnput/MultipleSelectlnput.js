/**
 * 多选输入框 MultipleSelectlnput.js
 */

import React, {Component} from 'react';
import {Select} from 'antd'
import PropTypes from 'prop-types'

const Option = Select.Option;


export default class MultipleSelectlnput extends Component {
    static propTypes = {
        selectCallback:PropTypes.func.isRequired,// Object.gPropTypes.func,//选中某项后给外部的回调
        unselectCallback: PropTypes.func//Object.gPropTypes.func.isRequired,//取消选中某项后给外部的回调
    };

    static defaultProps = {
        selectCallback: (v) => {

        },
        unselectCallback: (v) => {

        },
    };

    // static _self=this;

    constructor(props) {
        super(props);
        this.children = [];
        this.selectArr = [];//选中的元素
        for (let i = 10; i < 36; i++) {
            this.children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
    }

    componentWillMount() {

    }

    handleChange(arr, selectCallback, unselectCallback, selectArr) {
        // let self=this;
        // Object.gLog(`MultipleSelectlnput.js selected ${v}`);
        // let difference = selectArr.difference(arr);
        // console.log(difference);
        // if (arr.length>selectArr.length){//
        //     selectArr.push(difference[0]);
        //     // selectCallback(difference[0]);
        //     this.props.selectCallback(difference[0]);
        // }else{
        //     selectArr.remove(difference[0]);
        //     this.props.unselectCallback(difference[0]);
        // }

        this.props.selectCallback(arr);
    }

    selectCallback(v) {
        this.props.selectCallback(v);
    }

    unselectCallback(v) {
        this.props.unselectCallback(v);
    }

    render() {
        return (
            <Select
                mode="multiple"
                style={this.props.style}
                placeholder="Please select"
                defaultValue={[]}
                onChange={
                    (arr) => {
                        this.handleChange(arr, this.selectCallback, this.unselectCallback, this.selectArr)
                    }
                }
            >
                {this.children}
            </Select>
        );
    }
}
