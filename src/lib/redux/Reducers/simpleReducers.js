const initialstate={
    name:"shakeel"
}
export default (state = initialstate, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }