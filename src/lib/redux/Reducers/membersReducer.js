import {Add_Member,Remove_Member,SET_NEW_MEMBER} from '../Actions/membersAction'
const initialstate={
    members:[
        {
           id:1, name:"shakeel",email:"shakeelzain89@gmail.com", contact:"+92 310 5067211",role:"admin"
        },
        {
            id:2, name:"Usama",email:"usmama89@gmail.com", contact:"+92 310 7667211",role:"superadmin"
         },
         {
            id:3, name:"Shehryar",email:"shehryar9@gmail.com", contact:"+92 310 8967211",role:"member"
         },
         {
            id:4, name:"Mohsin",email:"mohsin89@gmail.com", contact:"+92 310 5027211",role:"member"
         }
    ],
    newMember:{
        name:"",email:"",role:""
    }
}

export default(state=initialstate,action)=>{
switch(action.type){
         case Add_Member:
        return{
            ...state
        }
        case Remove_Member:
                return{
                    ...state,
                    members:state.members.filter(member=>member.id!==action.id)
        }
        case SET_NEW_MEMBER:
            return {
                ...state,
                newmember:{
                    ...state.newMember,
                    [action.key]:state.newMember.name+[action.value]
                }
            }
    default:
        return state
}
}