import React, { Component } from 'react'
import {Container,Row} from "react-bootstrap"
import "./index.css"

export default class index extends Component {
    render() { 
       return (
           <Container>
            <Row>
                <div id="left_main_container"  className="col-md-3" >
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(element => 
                    <p className="remove_1rim-margin">Some Script</p>
                )}
                </div>
                <div className="col-md-7">
                   <div id="center_main_container">
                    <h3 style={{marginBottom:"20px"}}>Lead Info Messaging  <i className="fa fa-user-plus" ></i></h3>
                    </div>
                    {[1,2,3,4].map(element => 
                    <div className="eventdiv">
                    <div style={{padding:"10px"}}>
                    <h5 id="event_heading">Event Opening </h5>
                    <i className="fa fa-close icon_size" ></i>
                    <i className="fa fa-edit icon_size" ></i>
                    </div>
                    <div className="paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                </div>
                )}
                    
                   
                </div>
            

            </Row>
           </Container>
        )
    }
}
