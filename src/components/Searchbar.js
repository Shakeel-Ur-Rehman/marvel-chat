import React from 'react'
import {InputGroup,FormControl} from "react-bootstrap"

export default function Searchbar() {
    return (
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    
    )
}
