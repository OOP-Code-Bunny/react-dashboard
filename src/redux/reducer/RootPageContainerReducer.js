/*
 RootPageContainerReducer.js
 */
import {handleActions} from 'redux-actions'
import RootPageContainerInitialState from '../InitialState/RootPageContainerInitialState'
import rootPageContainerActions from '../action/rootPageContainerActions'
const initialState = new RootPageContainerInitialState();


export default function RootPageContainerReducer(state = initialState, action) {
    // if (!filterActions(state, action)) {
    //     return state;
    // }
    //
    // if (!(state instanceof antTableInitialState)) {
    //     return initialState.mergeDeep(state)
    // }

    switch (action.type) {
        case rootPageContainerActions.changeShowFullScreenSpin:{
            let nextState = state
                .setIn(['isShowFullScreenSpin'], action.isShowFullScreenSpin);
            return nextState;
        }
        break;
        // case rootPageContainerActions.changeCurrentSelectMenu:{
        //     let nextState = state
        //         .setIn(['currentSelectMenu'], action.currentSelectMenu);
        //     return nextState;
        // }
        //     break;

    }

    /**
     * ## Default
     */
    return state;
}
