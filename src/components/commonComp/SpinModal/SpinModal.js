import React from 'react'
import PropTypes from 'prop-types'
import {
    Spin
} from 'antd'
import {connect} from 'react-redux';
@connect(
    (state) => ({
        baseReducer: state.SpinModalReducer,
    })
)

export default class SpinModal extends React.Component {

    render() {
        const {
            spinning,
        } = this.props.baseReducer
        return (
            <Spin spinning={spinning}>
                {
                    this.props.children
                }
            </Spin>
        )
    }
}

// SpinModal.propTypes = {
//     // modalKey: PropTypes.string.isRequired,
//     spinning: PropTypes.bool.isRequired,
//     // title: PropTypes.string.isRequired,
//     // fields: PropTypes.arrayOf(Object).isRequired,
//     // onOk: PropTypes.func.isRequired,
//     // onCancel: PropTypes.func.isRequired,
//     // okText: PropTypes.string,
// }
//
// SpinModal.defaultProps={
//     spinning:false
// }

