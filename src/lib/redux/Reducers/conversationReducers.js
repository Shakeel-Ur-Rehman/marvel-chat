import {Change_Active_Inbox,Change_New_Message,Send_Message,Make_Chat_Complete,Change_Active_Ownership,Change_Search ,
    Featch_Thread_List_Request,Featch_Thread_List_Success,Featch_Thread_List_Error,} from '../Actions/conversationActions'
const initialstate={
    inbox:[],
    active_inbox:3,
    active_ownership:false,
    active_complete_inbox:false,
    new_message:"",
    search:"",
    loaderState:false

    
}
export default (state = initialstate, action) => {
    switch (action.type) {
     case Change_Active_Inbox:
      return {
          ...state,
            active_inbox:action.id
      }
      case Change_Active_Ownership:
      return {
          ...state,
            active_ownership:!state.active_ownership
      }
      case Change_New_Message:
        return {
            ...state,
              new_message:action.message
        }
        case Make_Chat_Complete:
            return {
                ...state,
                  active_complete_inbox:!state.active_complete_inbox
            }
        case Send_Message:
            var new_inbox=state.inbox
            var index=new_inbox.findIndex(value=>value.id===state.active_inbox);
            new_inbox[index].messages.push(state.new_message);
            return{
                ...state,
                inbox:[
                   ...new_inbox
                ],
                new_message:""
            }
        case Change_Search:
            {
                return {
                    ...state,
                    search:action.value
                }
            }

        case Featch_Thread_List_Request:
            {
                return{
                    ...state,
                    loaderState:true
                }
                
            }
        case Featch_Thread_List_Success:
            {
                console.log('called')
                return{
                    ...state,
                    inbox:action.result,
                    loaderState:false
                }
            }
        case Featch_Thread_List_Error: 
        {
            console.log(action.error)
            
                return{
                    ...state,
                    loaderState:false
                }
            

        }       

     default:
      return state
    }
   }