import React, { Component } from 'react'
import {InputGroup,FormControl,Button} from "react-bootstrap"
import Switch from "react-switch"
import {connect} from 'react-redux'

 class Messenger extends Component {
    render() {
      var activekey=this.props.inbox.filter(inbox=>inbox.id===this.props.active)
        return (
            <div style={{height:"550px"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{marginBottom:"10px",background:"white"}}>
            <p style={{margin:"10px",fontSize:"20px",float:"left"}}>{activekey[0].name}<span style={{color:"#5A5A5A",marginLeft:"15px",fontSize:"18px"}}>Last active an hour ago</span></p>
            <div style={{float:"right",marginTop:"15px"}}>
            <Switch
                        checked={this.props.active_complete_inbox}
                        onChange={()=>this.props.make_chat_complete()}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={15}
                        width={35}
                        className="react-switch"
                        id="material-switch"
                />
                </div>
            </div>
            <div style={{background:"white"}}>
                <div id="messages" style={{height:"725px",borderBottom:"1px solid black",overflowY:"scroll"}}>
                <div className="recieved_message" style={{margin:"10px",height:"150px"}}>
                  <div style={{float:"left",width:"20%"}}>
                  <div style={{float:"left",margin:"10% 0px 0px 30%",height:"64px",width:"64px",borderRadius:"32px",backgroundColor:"#C0CCDA"}}></div>
                  </div>
                  <div style={{float:"right",width:"70%",marginRight:"10%"}}>  
                   <p style={{marginBottom:"5px",backgroundColor:"#C0CCDA",padding:"20px",borderRadius:"8px",fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> 
                    <p style={{fontSize:"16px"}}>Eugene Lawson</p>
                  </div>
                </div>

              {activekey[0].messages.map(value=>

                <div key={value} className="sent_message" style={{margin:" 40px 10px 0px 0px"}}>
                  <div style={{float:"right",width:"70%"}}>  
                   <p style={{marginBottom:"5px",backgroundColor:"#C0CCDA",padding:"20px",borderRadius:"8px",fontSize:"14px"}}>{value}</p>   
                  </div>
                  
                </div>)
              }
                </div>
    <InputGroup className="mb-3">
    <FormControl
    
      value={this.props.message}
      placeholder="Reply"
      onKeyPress={(e)=>{
        if(e.which===13){
          this.props.send_message() 
        }
      }}
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={(e)=>{
        this.props.new_message(e.target.value)}}
      style={{border:"unset",marginTop:"10px",padding:"30px 50px",fontSize:"22px"}}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={()=>this.props.send_message()} style={{border:"unset",marginTop:"10px"}}>
      <i className="fa fa-caret-right" style={{fontSize:"22px"}}></i>
      </Button>
    </InputGroup.Append>
  </InputGroup>
            </div>
            </div>
        </div>
        )
    }
}
function mapStateToProps(state) {
  return { 
  active_complete_inbox:state.simpleReducer.active_complete_inbox, 
  inbox : state.simpleReducer.inbox,
  active: state.simpleReducer.active_inbox,
  message:state.simpleReducer.new_message
  };
}
function mapDispatchToProps(dispatch){
  return{
       new_message:(message)=>dispatch({type:"ChangeNewMessage",message}),
       send_message:()=>dispatch({type:"Send_Message"}),
       make_chat_complete:()=>dispatch({type:"Make_Chat_Complete"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Messenger);
