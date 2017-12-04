/**
 * Created by Ebates on 2017/8/26.
 *
 * BaseActions.js
 */


/**
 * 通用的 预编译时 创建action 的方法,
 * 可在 http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=true&presets=env%2Ces2015%2Ces2015-loose%2Ces2016%2Ces2017%2Creact%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3&targets=&browsers=&builtIns=false&debug=false&code_lz=MYewdgzgLgBMBOBTAhlRBBYUCW4YF4YAKKATwAdEAuGaebMAcwEoCA-Y85UgGxGQAmNAPIAjAFaIsBGAG8Avq3wcisgFAwYZSgBoNMAHRGuvfgL2KgA&experimental=false&loose=false&spec=false&playground=true 里 查看 转化后的 箭头函数为:
 *              var createAction = function createAction(type) {
                      return function () {
                        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        return _extends({
                          type: type
                        }, payload);
                      };
                    };
 *
 *
 * 预编译后, 此 createAction 就是个 function, 调用 时, 参数传{ key
    :value } 类型对象, type 在调用时就不用传了,因 预编译时,type 已经 传入生成
 * @param type
 */
export const createAction = (type /*: string*/) => (payload={} /*: Object = {}*/) => ({
    type,
    ...payload,
});

/**
 * 通用的 扩展 createAction 相关的 action
 * apiName: 调用时 传的固定参数, 区分不同action调的不同api, 必传参数
 * @param type
 */
export const createBaseAction = (type /*: string*/) => (payload  = {apiName: ''} /*: Object = {apiName: ''}*/ ) => ({
    type,
    ...payload,
});