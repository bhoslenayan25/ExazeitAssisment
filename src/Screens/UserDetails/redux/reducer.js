import { log } from '../../../Utilities/Utility';
import { SET_USER_DETAILS } from './action';

const initialState = {
    name:'' 

}

function userDeatilsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DETAILS:
            log('reducer',action)
            return {
                ...state,
                name: action.data
            }

        default:
            return state;
    }
}

export default userDeatilsReducer;