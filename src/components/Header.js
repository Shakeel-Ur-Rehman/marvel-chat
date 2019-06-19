import React, { Component } from 'react'
import {Button,Navbar,Nav,NavDropdown,Form,FormControl,Container,Row,Col} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <div>

                <Navbar expand="lg" style={{margin:"0px",padding:"0px"}} >
                <Navbar.Collapse id="basic-navbar-nav">

                <Container fluid={true}>
                <Row style={{height:"77px"}}>
                    <Col>
                            <Button  style={{width:"100px",marginTop:"6%",background:"#8190A5"}}>Logo</Button>
                    </Col>
                    <Col>
                        <Nav style={{height:'100%'}}>
                            <Nav.Link href="#home" style={{background:"#E5E9F2",paddingTop:"6%"}}>Conversations</Nav.Link>
                            <Nav.Link href="#features" style={{paddingTop:"6%"}}>Live Scripts</Nav.Link>
                            <Nav.Link href="#pricing" style={{paddingTop:"6%"}}>Members</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                     <div style={{height:"100%",paddingTop:"25px",textAlign:'right'}}> bell <span> smile</span> </div>
                    </Col>
                </Row>
                </Container>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header
