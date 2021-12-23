import { combineReducers } from 'redux';
import userDeatilsReducer from '../Screens/UserDetails/redux/reducer'
import { log } from '../Utilities/Utility';
const appReducer = combineReducers({
  user: userDeatilsReducer
});

const rootReducer = (state, action) => {
  log('===ACTION===', action.type, state);
  return appReducer(state, action);
};

export default rootReducer;
