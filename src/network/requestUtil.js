/**
 * 通用请求函数
 * RequestUtil
 */
import {message} from 'antd';
// import createHistory from 'history/createHashHistory';
import routePath_Comp from '../routes/routePath_Comp'
// const history = createHistory();

/**
 * 通用请求
 * @param url
 * @param method
 * @param headersAppendCallBack: 外部 加具体 的 header,因 内部
 * @param body
 * props: 组件的 props
 * @returns {Promise}
 */
export const request = (url, method, headersAppendCallBack, body) => {
    let header = new Headers();
    // header.append('Content-Type', 'application/x-www-form-urlencoded');//headers里固定要传的参数,因body传 key=value&key=value 格式的字符串
    header.append('Content-Type', 'application/json');//body用 JSON 类型, https://github.com/github/fetch
    Object.gStore.get(Object.gTokenKey) && header.append('Authorization', 'Bearer' + ' ' + Object.gStore.get(Object.gTokenKey).key);
    headersAppendCallBack && headersAppendCallBack(header);
    let options = {
        method: method, headers: header, body: jsonEncodeBody(body)
    }

    let request = new Request(url, options);
    let isOk;

    return new Promise((resolve, reject) => {
        fetch(request)
            .then(
                //第一个参数 函数 回调,就表示 fetch 成功
                (response) => {//通用的所有接口都会返回的response通用数据 结构,目前 注册接口返回的 response 对象不是 json格式,导致 response.json()
                    // 失败;后期服务器会在 response 里加个 message 字段,来 描述接口返回 的信息,不过返回的body里已经有message字段
                    isOk = response.ok;
                    if (!isOk && response.status === 401) {//token过期
                        Object.gHistory.push({
                            pathname: routePath_Comp.login.path,
                            state: Object.gHistory.state
                            //     {
                            //     from: Object.gHistory.getCurrentLocation()
                            // }
                        });
                        return reject(response)
                    }
                    return response.json();//拿 body,成功或错误的信息都在 body里,此时返回的body 必须是 json 格式,否则解析出错
                },
                //第2个参数 函数 回调,就表示 fetch 失败,可能是网络没了等原因,表示接口本身就没通
                (e) => {
                    reject(e);
                })
            .then((responseData/*responseData 是 第一个then里 response.json() 执行成功 后 返回的 body*/) => {
                    if (isOk) {//接口是通的,并且request时的参数没问题,故返回了正确的数据
                        resolve(responseData);

                    } else {//接口是通的,但request时可能参数不对,导致返回的数据是不对的
                        message.warn('接口失败');
                        reject(responseData);
                    }
                },
                (e /*e 是 第一个then里 response.json() 执行失败 后 返回的 error*/) => {
                    reject(e);
                }
            )
            .catch((error) => {
                reject(error);
            });
    });
};

export const GET = (url, params, headersAppendCallBack) => {

    url = encodeURL(url, params);

    return request(url, 'GET', headersAppendCallBack, null);
}

/**
 *
 * @param url
 * @param headersAppendCallBack
 * @param body 传 key=value&key=value  类型,因 header.append('Content-Type', 'application/x-www-form-urlencoded')
 * @returns {Promise}
 * @constructor
 */
export const POST = (url, headersAppendCallBack, body) => {
    return request(url, 'POST', headersAppendCallBack, body);
}

export const PATCH = (url, headersAppendCallBack, body) => {
    return request(url, 'PATCH', headersAppendCallBack, body);
}

/**
 * 拼接参数
 * @param url
 * @param params
 * @returns {*}
 */
const encodeURL = (url, params) => {
    if (params) {
        let paramsArray = [];
        //encodeURIComponent 拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))//数组对象拼成是
        // {xxx=xxx}
        if (url.search(/\?/) === -1) {//url里 没 有 ? 号 ,如 https://www.baidu.com/s
            url += '?' + paramsArray.join('&')//拼成 https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1
        } else {///url里 有 ? 号 ,如 https://www.baidu.com/s?
            url += '&' + paramsArray.join('&')//
        }
    }
    return url;
}

/**
 * 因header.append('Content-Type', 'application/x-www-form-urlencoded');//headers里和服务器约定好了加了个body数据类型的参数,故得把 body 对象 转化成 key=value&key=value 格式的字符串,并且 body得 encodeURIComponent 转码,把 body里的 特殊字符转 编码
 * @param body
 * @returns {string}
 */
const encodeBody = (body) => {
    if (body) {
        let paramsArray = [];
        Object.keys(body).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(body[key])))
        return paramsArray.join('&');
    }

    return null;
}

/**
 * https://github.com/github/fetch,  配合 header.append('Content-Type', 'application/json'); 一起用
 * @param body
 * @returns {null}
 */
const jsonEncodeBody=(body)=>{
    if (body){
        return JSON.stringify(body)
    }
    return body;
}