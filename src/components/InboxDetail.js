import React from 'react'
import {connect} from "react-redux"

function InboxDetail({inbox,active}) {
    var activekey=inbox.filter(inbox=>inbox.id===active)
    console.log(activekey)
    return (
        
            <div style={{background:"white",height:"175px",marginBottom:"10px"}}>
            <div style={{width:"85px",margin:"10px",marginBottom:"120px",height:"85px",float:"left",background:"#E5E9F2",borderRadius:"42px"}}></div>
            <h5 style={{padding:"16px",marginBottom:"0px",fontSize:"26px"}}>{activekey[0].name}</h5>
            <p style={{fontSize:"16px",marginBottom:"10 px",marginLeft:"85px"}}> <span><i className="fa fa-phone" style={{fontSize:"20px"}}></i></span>{activekey[0].phone}</p>
            <p style={{fontSize:"16px",marginLeft:"85px"}}>  <span><i className="fa fa-envelope" style={{fontSize:"16px"}}></i></span> {activekey[0].email}</p>
            <p style={{fontSize:"16px",marginTop:"20px"}}>Lead Source: Rightmove </p>
        </div>
      
    )
}
function mapStateToProps(state) {
    return {
    inbox : state.simpleReducer.inbox,
    active: state.simpleReducer.active_inbox
    };
  }
export default connect(mapStateToProps)(InboxDetail);
