import React from 'react'
import { Container } from 'react-bootstrap';
import {connect} from 'react-redux'

 function Inbox(props) {

    var result= props.inbox;
    if(props.search!="")
    {
        result=props.inbox.filter(chat=>
            chat.name.toLowerCase().indexOf(props.search.toLowerCase())!=-1
            )

    }
   
     
    return (  
        <Container fluid={true}>
        {
            result.map(value=>
                
                
                <div key={value.id} onClick={()=>props.changeActiveInbox(value.id)}  style={props.active===value.id?{height:"75px",borderBottom:"1px solid #BBBFC3",backgroundColor:"rgba(233,235,238,0.5)"}:{height:"75px",borderBottom:"1px solid #BBBFC3",cursor:"pointer"}}>
                <div style={{float:"left",width:"20%",marginRight:"2%"}}>
                <div style={{width:"50px",margin:"10px 5px 0px 0px",height:"50px",background:"#E5E9F2",borderRadius:"25px"}}></div>
                </div>
                <div style={{float:"left",width:"77%",marginTop:"8px"}}>
                    <h5 style={{marginBottom:"unset",fontSize:"18px",fontWeight:700}}>{value.name}</h5>
                    <p style={{fontSize:"14px",marginBottom:"unset"}}>{value.messages[0]}</p>
                </div>
            </div>
            )
        }    
        </Container>
    )
}
function mapStateToProps(state) {
    return {
    inbox : state.simpleReducer.inbox,
    active: state.simpleReducer.active_inbox,
    search:state.simpleReducer.search
    };
  }
function mapDispatchToProps(dispatch){
    return{
        changeActiveInbox:(id)=>dispatch({type:"ChangeActiveInbox",id})
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Inbox);
 
