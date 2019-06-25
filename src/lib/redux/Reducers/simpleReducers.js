const initialstate={
    inbox:[
        {
            id:1,name:"Usama",phone:"+92 300 1234987",email:"usama123@gmail.com",messages:["Usama this is your first message","Usama this is your second message"]
        },
        {
            id:2,name:"Shakeel",phone:"+92 334 1234987",email:"shakeel456@gmail.com",messages:["Shakeel this is your first message","Shakeel this is your second message"]
        },
        {
            id:3,name:"Mohsin",phone:"+92 343 1234987",email:"mohsin789@gmail.com",messages:["Mohsin this is your first message","Mohsin this is your second message"]
        },
        {
            id:4,name:"Mohsin",phone:"+92 343 1234987",email:"mohsin789@gmail.com",messages:["Mohsin this is your first message","Mohsin this is your second message"]
        },
        {
            id:5,name:"Mohsin",phone:"+92 343 1234987",email:"mohsin789@gmail.com",messages:["Mohsin this is your first message","Mohsin this is your second message"]
        },
        {
            id:6,name:"Mohsin",phone:"+92 343 1234987",email:"mohsin789@gmail.com",messages:["Mohsin this is your first message","Mohsin this is your second message"]
        },
        {
            id:7,name:"Mohsin",phone:"+92 343 1234987",email:"mohsin789@gmail.com",messages:["Mohsin this is your first message","Mohsin this is your second message"]
        }
    ],
    active_inbox:1,
    active_ownership:false,
    active_complete_inbox:false,
    new_message:"",
    search:""

    
}
export default (state = initialstate, action) => {
    switch (action.type) {
     case 'ChangeActiveInbox':
      return {
          ...state,
            active_inbox:action.id
      }
      case 'ChangeActiveOwnership':
      return {
          ...state,
            active_ownership:!state.active_ownership
      }
      case 'ChangeNewMessage':
        return {
            ...state,
              new_message:action.message
        }
        case 'Make_Chat_Complete':
            return {
                ...state,
                  active_complete_inbox:!state.active_complete_inbox
            }
        case 'Send_Message':
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
        case 'Change_Search':
            {
                return {
                    ...state,
                    search:action.value
                }
            }

     default:
      return state
    }
   }