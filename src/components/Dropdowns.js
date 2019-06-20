import React from 'react'
import "../App.css"
import {InputGroup,Dropdown,DropdownButton, Container, Row,Col} from "react-bootstrap"

export default function Dropdowns() {
  return (
    <div>
      <Container>
      <Row>
        <Col>
    <InputGroup className="mb-3">
    <DropdownButton
      variant="outline-secondary"
      title="User Name"
    
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
  </Col>
  <Col>  <InputGroup className="mb-3">
    <DropdownButton
      variant="outline-secondary"
      title="Status"
     style={{width:"100%"}}
      id="status"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
  </Col>
  </Row>
  <Row>
    <Col>
  <InputGroup className="mb-3"> 
  <DropdownButton 
    variant="outline-secondary"
    title="Date"
    id="date"
    style={{width:"100%"}}
  >
    <Dropdown.Item href="#">Action</Dropdown.Item>
    <Dropdown.Item href="#">Another action</Dropdown.Item>
    <Dropdown.Item href="#">Something else here</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#">Separated link</Dropdown.Item>
  </DropdownButton>
</InputGroup>
</Col>
<Col>
<InputGroup className="mb-3">
<DropdownButton
  variant="outline-secondary"
  title="Property"
  style={{width:"100%"}}
  id="property"
>
  <Dropdown.Item href="#">Action</Dropdown.Item>
  <Dropdown.Item href="#">Another action</Dropdown.Item>
  <Dropdown.Item href="#">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#">Separated link</Dropdown.Item>
</DropdownButton>
</InputGroup>
</Col>
</Row>
</Container>
</div>
  )
}
