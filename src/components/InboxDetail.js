import React from 'react'
import {connect} from "react-redux"
import { Container } from 'react-bootstrap';

function InboxDetail({inbox,active,loader}) {
    var activekey={}
    if(inbox.length>0){
      activekey=inbox.filter(inbox=>inbox.id===active)
      activekey=activekey[0]
    }
    return (

        
            <div style={{background:"white",height:"175px",marginBottom:"10px"}}>
            <div style={{width:"85px",margin:"10px",marginBottom:"120px",height:"85px",float:"left",background:"#E5E9F2",borderRadius:"42px"}}></div>
            {
            loader?
            <img style={{width:"25px",height:"25px",margin :" 10px 20px  "}} src="images/45.gif"/>
            :<Container>
            <h5 style={{padding:"16px",marginBottom:"0px",fontSize:"26px"}}>{activekey.topic}</h5>
            <p style={{fontSize:"16px",marginBottom:"10 px",marginLeft:"85px"}}> <span><i className="fa fa-phone" style={{fontSize:"20px"}}></i></span>{activekey.phone}</p>
            <p style={{fontSize:"16px",marginLeft:"85px"}}>  <span><i className="fa fa-envelope" style={{fontSize:"16px"}}></i></span> abc123@gmail.com</p>
            </Container>
            }
            <p style={{fontSize:"16px",marginTop:"20px"}}>Lead Source: Rightmove </p>
        </div>
      
    )
}
function mapStateToProps(state) {
    return {
    inbox : state.conversationReducer.inbox,
    active: state.conversationReducer.active_inbox,
    loader:state.conversationReducer.loaderState
    };
  }
export default connect(mapStateToProps)(InboxDetail);
