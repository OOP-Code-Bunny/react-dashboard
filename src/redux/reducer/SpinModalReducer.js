/*
 SpinModalReducer.js
 */
import SpinModalInitialState from '../InitialState/SpinModalInitialState'
import SpinModalActions from '../action/SpinModalActions'
const initialState = new SpinModalInitialState();


export default function SpinModalReducer(state = initialState, action) {

    switch (action.type) {
        case SpinModalActions.changeSpinning:{
            let nextState = state
                .setIn(['spinning'], action.spinning);
            return nextState;
        }
        break;

    }

    /**
     * ## Default
     */
    return state;
}
