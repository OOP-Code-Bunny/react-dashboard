/**
 * Created by Ebates on 16/12/20.
 * 字符串验证
 * StringOauth
 */

/**
 * str1里是否包含str2
 * @param str1
 * @param str2
 * @returns {boolean}
 */
export function contain(str1, str2) {
    // indexOf: str第一次在str1里出现的下标
    return str1.indexOf(str2) > 0;
}

/**
 * http://www.cnblogs.com/sj521/p/5623035.html
 * 判断字符串长度
 * @param val
 * @returns {number} 返回的长度是按英文字符判断的,如 中国china=9
 */
export function getStrLen(val) {
    let len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;//汉字算两个字符
        }
        else {
            len += 1;
        }
    }
    return len;
}

//  获取字符串长度，兼容中英文 http://www.52doit.com/show/457, 和 getStrLen 方法结果一样
export  function _getLength(str) {
    var real_length = 0,
        char_code = -1;
    for (var i = 0, len = str.length; i < len; i++) {
        char_code = str.charCodeAt(i);
        if (char_code >= 0 && char_code <= 128) {
            real_length += 1;
        } else {
            real_length += 2;
        }
    }
    return real_length;
};

/**
 * 字符串是否包含汉字
 * @param val
 * @returns {boolean}
 */
export function isContainChinese(val) {
    let b = false;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
            b = true
        }
    }
    return b;
}

/**
 * 检测 字符串是否全是 数字
 * @param text
 * @returns {boolean}
 */
export function isAllNum(val) {
    let b = true;
    for (var i = 0; i < val.length; i++) {
        let a = val.charAt(i);
        if (isNaN(a)) {
            b = false;
            break;
        }
    }
    return b;
}

String.prototype.isNull = function () {
    let str=this;
    return (!str||str.length == 0 || str == "" || str.replace(/(^s*)|(s*$)/g, "").length == 0 || new RegExp("^[ ]+$").test(str) || typeof str == "null");
};

/**
 * 判断 字符串是否为 空、空格、null
 * http://www.jb51.net/article/86543.htm
 * @param str
 */
export function isNull(str) {
    return (!str||str.length == 0 || str == "" || str.replace(/(^s*)|(s*$)/g, "").length == 0 || new RegExp("^[ ]+$").test(str) || typeof str == "null");
}

//外部 调用时 是 xxx.isNull()
String.prototype.isNull=function(){
    return (!this||this.length == 0 || this == "" || this.replace(/(^s*)|(s*$)/g, "").length == 0 || new RegExp("^[ ]+$").test(this) || typeof this == "null" || typeof this == "undefined");
}

/**
 * 任何东西转成 str
 * @param value
 * @returns {string}
 */
export function anyThingToString(value) {

    return String(value);
}
