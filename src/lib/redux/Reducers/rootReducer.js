import { combineReducers } from 'redux';
import simpleReducer from './simpleReducers';
import applicationReducer from "./applicationReducer"
import membersReducer from "./membersReducer"
export default combineReducers({
 simpleReducer,
 applicationReducer,
 membersReducer,
}); 