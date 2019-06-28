import {get,post,put,_delete} from '../Utils/fetchUtills'
import {Featch_Thread_List_Request,Featch_Thread_List_Success,Featch_Thread_List_Error,
        Featch_Messages_Request,Featch_Message_Success,Featch_Message_Error  } from '../lib/redux/Actions/conversationActions'
import { async } from 'q';

 export async function featch_thread_list(dispatch)
 {
    
    try{
       dispatch({type:Featch_Thread_List_Request})
        var result= await get('/messagethreads');
        if(!result.error){
            dispatch({type:Featch_Thread_List_Success,result:result})}
        else {
            dispatch({typr:Featch_Thread_List_Error,error:result.error})}
    }catch(error)
    {
        dispatch({type:Featch_Thread_List_Error,error})
    }

 }       

