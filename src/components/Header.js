import React, { Component } from 'react';
import {Button,Navbar,Nav,Container,Row,Col, Badge} from 'react-bootstrap';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

class Header extends Component {
    handleClick(e,value){
        e.preventDefault();
        this.props.setActiveTab(value)
        this.props.history.push(value)
    }
    render() {
        return (
            <div style={{backgroundColor:"white"}}>
                <Navbar expand="lg" style={{margin:"0px",padding:"0px"}} >
                <Navbar.Collapse id="basic-navbar-nav">

                <Container fluid={true}>
                <Row style={{height:"77px"}}>
                    <Col>
                            <Button  style={{width:"100px",marginTop:"6%",background:"#8190A5"}}>Logo</Button>
                    </Col>
                    <Col>
                        <Nav style={{height:'100%'}}>
                            <Nav.Link href="/conversations" onClick={(e)=>this.handleClick(e,"conversations")} style={this.props.active_tab==="conversations"?{background:"#E5E9F2",paddingTop:"6%"}:{paddingTop:"6%"}}>Conversations</Nav.Link>
                            <Nav.Link href="/livescritps" onClick={(e)=>this.handleClick(e,"livescripts")} style={this.props.active_tab==="livescripts"?{background:"#E5E9F2",paddingTop:"6%"}:{paddingTop:"6%"}}>Live Scripts</Nav.Link>
                            <Nav.Link href="/members" onClick={(e)=>this.handleClick(e,"members")} style={this.props.active_tab==="members"?{background:"#E5E9F2",paddingTop:"6%"}:{paddingTop:"6%"}}>Members</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                     <div style={{height:"100%",paddingTop:"25px",textAlign:'right'}}>
                    <span style={{marginRight:"10px"}}>
                        <i className="fa fa-bell" onClick={()=>{
                            document.getElementById("notificationbar").classList.toggle("showhide")
                        }} style={{fontSize:"35px"}}></i>
                        <Badge variant="danger" style={{top:"-17px",position: "relative",left: "-36px"}}>7</Badge>
                        </span>
                    <div id="notificationbar" className="showhide">
                   
                        <p style={{textAlign:"center"}}>Some Notification</p>
                        <p style={{textAlign:"center"}}>Some Notification</p>
                        <p style={{textAlign:"center"}}>Some Notification</p>
                        <p style={{textAlign:"center"}}>Some Notification</p>
                  
                    </div>
                    <span><i className="fa fa-smile-o" style={{fontSize:"35px"}} onClick={()=>{
                        this.props.history.push("profile")
                    }}></i></span>
                          </div>
                    </Col>
                </Row>
                </Container>
                </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
return{
    active_tab:state.applicationReducer.active_tab
}
}
const mapDispatchToProps=(dispatch)=>{
return{
    setActiveTab:(value)=>dispatch({type:"SetActiveTab",value})
}
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))

