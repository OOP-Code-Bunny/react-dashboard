/*
 RootPageContainerInitialState.js
 */
import *as ObjectUtils from '../../utils/ObjectUtils'
const {Record, fromJS,} = require('immutable') //导入  Immutable.js 的 Record API


export default Record({
    isShowFullScreenSpin: true,//是否展示全屏菊花,
    // currentSelectMenu:'',//当前选中的menu的path
});

