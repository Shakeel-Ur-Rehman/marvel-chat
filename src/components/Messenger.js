import React, { Component } from 'react'
import {InputGroup,FormControl,Button} from "react-bootstrap"
import Switch from "react-switch"

export default class Messenger extends Component {
    render() {
        return (
            <div style={{height:"550px"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{marginBottom:"10px",background:"white"}}>
            <p style={{margin:"10px",fontSize:"18px",float:"left"}}>Eugene Lawson<span style={{color:"#5A5A5A",marginLeft:"15px"}}>Last active an hour ago</span></p>
            <div style={{float:"right",marginTop:"15px"}}>
            <Switch
                        checked={false}
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
                <div style={{height:"400px",borderBottom:"1px solid black",overflowY:"scroll"}}>
                <div className="recieved_message" style={{margin:"10px",height:"150px"}}>
                  <div style={{float:"left",width:"20%"}}>
                  <div style={{float:"left",margin:"10% 0px 0px 30%",height:"64px",width:"64px",borderRadius:"32px",backgroundColor:"#C0CCDA"}}></div>
                  </div>
                  <div style={{float:"right",width:"70%",marginRight:"10%"}}>  
                   <p style={{marginBottom:"5px",backgroundColor:"#C0CCDA",padding:"20px",borderRadius:"8px",fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> 
                    <p style={{fontSize:"16px"}}>Eugene Lawson</p>
                  </div>
                </div>
                <div className="sent_message" style={{margin:" 40px 10px 0px 0px",height:"150px"}}>
                  <div style={{float:"right",width:"70%"}}>  
                   <p style={{marginBottom:"5px",backgroundColor:"#C0CCDA",padding:"20px",borderRadius:"8px",fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>   
                  </div>
                </div>
                </div>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Reply"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      style={{border:"unset",marginTop:"10px",padding:"30px 50px"}}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" style={{border:"unset",marginTop:"10px"}}>
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
