import { combineReducers } from 'redux';
import conversationReducer from './conversationReducers';
import applicationReducer from "./applicationReducer"
import membersReducer from "./membersReducer"
export default combineReducers({
conversationReducer,
 applicationReducer,
 membersReducer,
}); 