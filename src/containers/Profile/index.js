import React, { Component} from 'react'
import { Button } from 'react-bootstrap';
import "./profile.css"
export default class index extends Component {
    render() {
        return (
            <div style={{width:"60%",margin:"auto"}}>
                <h2 id="profiletext">Profile</h2>
            <div id="profile">
                <div className="row lineheight">
                    <p className="col-md-4">
            Name
                  </p>
                  <p className="col-md-4">
            Shakeel Ur Rehman
                  </p>  
                    </div>
                    <div className="row lineheight" >
                    <p className="col-md-4">
            Email
                  </p>
                  <p className="col-md-4">
                  anthonysargent@gmail.com
                  </p>  
                    </div>
                    <div className="row lineheight" >
                    <p className="col-md-4">
            Phone
                  </p>
                  <p className="col-md-4">
                  +3472727278890
                  </p>  
                    </div>
                    <div className="row lineheight" >
                    <p className="col-md-4">
            New Password
                  </p>
                  <p className="col-md-4">
            change Password
                  </p>  
                    </div>
                    <div className="row lineheight" >
                    <p className="col-md-4">
            Abc Email
                  </p>
                  <p className="col-md-4">
                  ksjhdlkajhsd8as7dfoiahdf98@abc.com
                  </p>  
                    </div>
                    <div className="row lineheight" >
                    <p className="col-md-4">
            SMS Number
                  </p>
                  <p className="col-md-4">
            +89798798798111
                  </p>  
                    </div>
                    <div className="row lineheight" >
                    <p className="col-md-4">
            Time Zone
                  </p>
                  <p className="col-md-4">
            Euorpe/London
                  </p>  
                    </div>
                    <div className="row lineheight" >
                    <p className="col-md-4">
            Plan
                  </p>
                  <p className="col-md-4">
            Managed Plan
                  </p>  
                    </div>
                <div style={{margin:"auto",textAlign:"center",marginTop:"20px"}}>
                <Button id="changeplan">Change Plan</Button>
                </div>
               
            </div>
            </div>
            
        )
    }
}
