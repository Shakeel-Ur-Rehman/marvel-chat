import React from 'react'
import {InputGroup,Dropdown,DropdownButton} from "react-bootstrap"

export default function Dropdowns() {
  return (
    <div>
    <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
  <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
  <InputGroup className="mb-3">
  <DropdownButton
    as={InputGroup.Prepend}
    variant="outline-secondary"
    title="Dropdown"
    id="input-group-dropdown-1"
  >
    <Dropdown.Item href="#">Action</Dropdown.Item>
    <Dropdown.Item href="#">Another action</Dropdown.Item>
    <Dropdown.Item href="#">Something else here</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#">Separated link</Dropdown.Item>
  </DropdownButton>
</InputGroup>
<InputGroup className="mb-3">
<DropdownButton
  as={InputGroup.Prepend}
  variant="outline-secondary"
  title="Dropdown"
  id="input-group-dropdown-1"
>
  <Dropdown.Item href="#">Action</Dropdown.Item>
  <Dropdown.Item href="#">Another action</Dropdown.Item>
  <Dropdown.Item href="#">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#">Separated link</Dropdown.Item>
</DropdownButton>
</InputGroup>
</div>
  )
}
