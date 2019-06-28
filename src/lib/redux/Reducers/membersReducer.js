import {Add_Member,Remove_Member,SET_NEW_MEMBER} from '../Actions/membersAction'
const initialstate={
    members:[
        {
           id:1, name:"shakeel",email:"shakeelzain89@gmail.com", contact:"+92 310 5067211",role:"Admin"
        },
        {
            id:2, name:"Usama",email:"usmama89@gmail.com", contact:"+92 310 7667211",role:"Super Admin"
         },
         {
            id:3, name:"Shehryar",email:"shehryar9@gmail.com", contact:"+92 310 8967211",role:"Manager"
         },
         {
            id:4, name:"Mohsin",email:"mohsin89@gmail.com", contact:"+92 310 5027211",role:"Manager"
         }
    ],
    newMember:{
        name:"",email:"",role:"Admin"
    }
}

export default(state=initialstate,action)=>{
switch(action.type){
    
         case Add_Member:
                var id=state.members.length+1;
                var newmember={
                    id:id,
                    ...state.newMember,
                    contact:"+92 310 5027211"
                }
             
        return{
            ...state,
            members:[
                ...state.members,
                newmember
        ],
        newMember:{
            name:"",email:"",role:"Admin"
        }

        }
        case Remove_Member:
                return{
                    ...state,
                    members:state.members.filter(member=>member.id!==action.id)
        }
        case SET_NEW_MEMBER:
        
            return {
                ...state,
                newMember:{
                    ...state.newMember,
                    [action.key]:action.value
                }
            }
    default:
        return state
}
}