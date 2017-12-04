/**
 * 单独内容的输入框
 */

import React, {Component} from 'react';
import {Input, Icon } from 'antd'


export default class SingleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        };
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ content: '' });
    }
    onChangeUserName = (e) => {
        this.setState({ content: e.target.value });
    }

    render() {
        const { content } = this.state;
        const suffix = content ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <Input
                placeholder={this.props.placeholder}
                // prefix={<Icon type="user" />}
                style={this.props.style}
                suffix={suffix}
                value={content}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
            />
        );
    }
}
