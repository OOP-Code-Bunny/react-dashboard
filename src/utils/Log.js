/**
 * Created by rplees on 13-12-26.
 */
export default {

    /**
     * 和console.log () 一样
     * eg:      Log.log('array===>>>');
     Log.log(array);
     Log.log('array===<<<');
     * @param m
     */
    log(m) {
        this._l(Array.prototype.slice.apply(arguments));
    },

    _l(array) {
        if (!array) return;
        let m = array[0];
        for (var i = 1; i < array.length; i++) {
            if (m.indexOf("%s") > -1) {
                m = m.replace("%s", array[i]);
            } else {
                m = m.replace("{}", array[i]);
            }
        }

        console.log(m);
    },

    _serializeArguments(array) {
        if (!array) return;
        let m = array[0];
        for (var i = 1; i < array.length; i++) {
            if (m.indexOf("%s") > -1) {
                m = m.replace("%s", array[i]);
            } else {
                m = m.replace("{}", array[i]);
            }
        }

        return m;
    },

    /**
     * 序列化参数对象&返回出去
     * @param m
     * @returns {*}
     */
    serializeArguments(m) {
        return this._serializeArguments(Array.prototype.slice.apply(arguments));
    },



    /**
     * log, info ,debug  貌似一样
     */
    info(m) {
        this._l(Array.prototype.slice.apply(arguments));
    },

    debug(m) {
        this._l(Array.prototype.slice.apply(arguments));
    },

    warn(m) {
        var arr = Array.prototype.slice.apply(arguments);
        if (arr)
            arr[0] = '[warn]' + arr[0];

        this._l(arr);
    },

    error(m) {
        var arr = Array.prototype.slice.apply(arguments);
        if (arr)
            arr[0] = '[error]' + arr[0];
        this._l(arr);
    },


    /**
     * 把 OBJ 写成 json 格式 return ,供 显示
     * @param obj
     * @returns {string}
     */
    writeObjToJson(obj) {
        // var names = "";
        // for (var name in obj) {
        //     names += name + ": " + obj[name] + ", ";
        // }
        //
        // return names;
        return JSON.stringify(obj);
    }
}

// module.exports = Log;