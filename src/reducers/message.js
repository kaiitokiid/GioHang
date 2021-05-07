import * as Types from '../constants/ActionType';
import * as MSG from '../constants/Message';

var initialState = MSG.MSG_WELCOME;

const message = (state = initialState, action) => {

    switch (action.type) {

        case Types.CHANGE_MSG:

            return action.message;
        default: return state;
    }
}

export default message;