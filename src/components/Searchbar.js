import React from 'react'
import {InputGroup,FormControl} from "react-bootstrap"
import {connect } from 'react-redux'

 function Searchbar(props) {
    return (
        <InputGroup >
        <FormControl
        value={props.search}
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>props.changeSearch(e.target.value)}
          style={{fontWeight:700,background:"#F9F9F9"}}  
        />
      
      </InputGroup>
    
    )
}
function mapStateToProps(state) {
  return {

  search: state.simpleReducer.search
  };
}
function mapDispatchToProps(dispatch){
  return{
      changeSearch:(value)=>dispatch({type:"Change_Search",value})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Searchbar);
