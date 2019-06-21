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
                <div style={{height:"400px",borderBottom:"1px solid black"}}></div>
                <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
            </div>
            </div>
        </div>
        )
    }
}
