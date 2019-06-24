const initialState={
active_tab:"conversations",
Add_Member_Modal_open:false
}
export default (state=initialState,action)=>{
switch(action.type){
    case "SetActiveTab":
        return{
            ...state,
            active_tab:action.value
        }
        case "ToggleMemberModal":
            return{
                ...state,
                Add_Member_Modal_open:!state.Add_Member_Modal_open
            }

    default:
        return state
}
}