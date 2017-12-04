/**
 * 路由配置
 */
import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';
import {Router,HashRouter,Switch, BrowserRouter} from 'react-router-dom'
// import rootRouter from './rootRouter'
// import globalVar from '../utils/globalConst/globalVar'
import RootPageContainer from '../components/page/rootPageContainer/RootPageContainer'
// import *as CustomRoute  from './CustomRoute'
// import LoginPage from '../components/page/login/LoginPage'
import routePath_Comp from './routePath_Comp'
import { Layout } from 'antd'
import RootRoutepage from './RootRoutepage'
// import createBrowserHistory from 'history/createBrowserHistory'
// import createHistory from 'history/createHashHistory';
// const history = createHistory();
// const history = createBrowserHistory();
const { Content } = Layout;


// export default class CRouter extends Component {
//
//     componentWillMount() {
//     }
//
//     render(){
//         //只执行一次
//         return (
//             <HashRouter history={Object.gHistory} >
//                 <div>
//                     <Route path="/" component={RootPageContainer} />
//                     {/*<Route path="/login" component={LoginPage} />*/}
//                     <Route path={routePath_Comp.login.path} component={routePath_Comp.login.comp} />
//                 </div>
//             </HashRouter>
//             // {/*<BrowserRouter /*history={customHistory}*/>*/}
//             //     {/*/!*react-router最外层只能有一个子元素,即<Router>只允许有一个子节点，故需要包一层div*!/*/}
//             //     {/*<div>*/}
//             //         {/*<RootPageContainer/>*/}
//             //         {/*/!*<Content className="content">*!/*/}
//             //         {/*<Switch>*/}
//             //             {/*/!*<Route path="/" component={requireAuthentication(RootPageContainer)} />*!/*/}
//             //             {/*<PrivateRoute path="/Linkshare" component={NetworkTransactionsContent} />*/}
//             //             {/*/!*<Route path="/Linkshare" component={NetworkTransactionsContent} />*!/*/}
//             //             {/*<Route path="/login" component={LoginPage} />*/}
//             //         {/*</Switch>*/}
//             //         {/*/!*</Content>*!/*/}
//             //     {/*</div>*/}
//             // {/*</BrowserRouter>*/}
//         )
//     }
//
//
// }

const routes = (
    <HashRouter history={Object.gHistory} >
        <div>
            <Route path="/" component={RootPageContainer} />
            {/*<Route path="/login" component={LoginPage} />*/}
            <Route path={routePath_Comp.login.path} component={routePath_Comp.login.comp} />
        </div>
    </HashRouter>
)
export default routes;