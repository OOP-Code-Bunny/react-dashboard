import React from 'react';
import {Form, Input, Button, notification, Icon} from 'antd';
// import createHistory from 'history/createHashHistory';
import './index.css'
import {Redirect} from 'react-router-dom';
import loginAuth from '../../../utils/loginAuth'
import SpinModal from '../../commonComp/SpinModal/SpinModal'
import {connect} from 'react-redux';
const FormItem = Form.Item;

@connect(
    (state) => ({
        baseReducer: state.LoginPageReducer,
    })
)

class LoginPage extends React.Component {
    constructor() {

        super();

        this.state = {
            redirectToReferrer: false
        };
        // this.login = this.login.bind(this);
    }

    // login() {
    //
    //     loginAuth.authenticate(
    //         () => {
    //             this.setState({redirectToReferrer: true})
    //         })
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;

        let self = this;
        self.props.dispatch(
            Object.gSpinModalActions.changeSpinningAction({
                spinning:true,
                apiName:''
            })
        );

        Object.gRequestUtil.POST(`${Object.curRequestUrlDomain}/token`,
            null, {
                email: n,
                password: p,
            }
        ).then((response) => {
            if (response) {
                self.props.dispatch(
                    Object.gSpinModalActions.changeSpinningAction({
                        spinning:false,
                        apiName:''
                    })
                );

                //缓存token对象
                let now = new Date().getTime();
                loginAuth.token = {key: response.token, expiredTime: now + Object.gTokenExpiredTime};
                Object.gStore.set(Object.gTokenKey, loginAuth.token);
                Object.gStore.set(Object.admin_id, response.admin_id);

                loginAuth.authenticate(
                    () => {
                        self.setState({redirectToReferrer: true});
                    }
                )
            }
        }).catch((error) => {
            self.props.dispatch(
                Object.gSpinModalActions.changeSpinningAction({
                    spinning:false,
                    apiName:''
                })
            );
        });

    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        // return notification[type]({
        //          message: '用户名&密码',
        //          description: '都是：123',
        //          duration: 6,
        //          icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        //        })
    }

    componentDidMount() {
        // this.openNotificationWithIcon('info');
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const {from} = this.props.location.state || {from: {pathname: Object.gHistory.location.state ? Object.gHistory.location.state.from : '/'}}
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {//重新定向到 进入 login 页面之前的 页面
            return (
                <Redirect to={from}/>
            )
        }
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <SpinModal>
                        <p>Welcome to the Dashboard</p>
                        <div className="loginWrap">
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem>
                                    {getFieldDecorator('username', {
                                        rules: [{required: true, message: '请输入用户名'}],
                                    })(
                                        <Input placeholder="Username"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{required: true, message: '请输入密码'}],
                                    })(
                                        <Input type="password" placeholder="Password"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                            </Form>
                        </div>
                    </SpinModal>

                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;