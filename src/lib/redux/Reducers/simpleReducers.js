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
        }
    ],
    active_inbox:1,
    active_ownership:false

    
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
     default:
      return state
    }
   }