/**
 * loginAuth.js
 * @type {{isAuthenticated: boolean, authenticate: ((cb?))}}
 */

export default  {
    isAuthenticated: false,
    token:{//被缓存的token 的数据结构
        key:'',
        expiredTime:''
    },
    authenticate(callBack) {
        Object.gWriteObjToJson('loginAuth.js token =='+Object.gStore.get(Object.gTokenKey));
        Object.gLog('loginAuth.js now=='+new Date().getTime());
        if (Object.gStore.get(Object.gTokenKey)){
            Object.gLog('loginAuth.js 过期时间是='+Object.gStore.get(Object.gTokenKey)?Object.gStore.get(Object.gTokenKey).expiredTime:'null');
        }
        if (Object.gStore.get(Object.gTokenKey)&&Object.gStore.get(Object.gTokenKey).expiredTime>new Date().getTime()){
            this.isAuthenticated = true;
            setTimeout(callBack, 100);
            Object.gLog('token在缓存里没过期')
            return true;
        }
        else{
            return false;
        }

    }
};