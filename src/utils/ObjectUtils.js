/*
 ObjectUtils.js
 */

/**
 * 根据 对象的 value 找到 对应 的 key
 * @param obj
 * @param value
 * @param filterCallback
 * @returns {*}
 */
export function findKeyByValue (obj,value,filterCallback) {
    let keys=Object.keys(obj);
    let values =Object.values(obj);
    let result=null;

    for (let i=0;i<values.length;i++){
        let n=values[i];
        if (filterCallback(n) && n===value) {
            result=keys[i];
            break;
        }
    }
    return result;
}