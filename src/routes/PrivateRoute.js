/*
 需要登录才能访问的路由, 每次路由跳转都会 通过 loginAuth.authenticate 检测 token 是否过期
 PrivateRoute.js
 */
import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';
import loginAuth from '../utils/loginAuth'
import routePath_Comp from './routePath_Comp'

export default ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render=
                {
                    props => {
                        if (loginAuth.authenticate(null) === true) {
                            Object.gHistory.state=props.history.location;
                            return (
                                <Component {...props} />
                            )
                        } else {
                            Object.gHistory.state=props.history.location;
                            return (
                                <Redirect
                                    to={{
                                        pathname: /*"/login"*/routePath_Comp.login.path,
                                        state: {from: props.location}
                                    }}
                                />
                            )
                        }
                    }

                }
        />
    );
};