/**
 */
import * as type from '../action/httpAction/type';

const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};

/**
 * 和 EbatesApp项目的reducer写法不一样, 此项目的reducer直接 导出一个箭头函数
 * @param state
 * @param action
 * @returns {{}}
 */
export default (state = {}, action)=>{
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};

