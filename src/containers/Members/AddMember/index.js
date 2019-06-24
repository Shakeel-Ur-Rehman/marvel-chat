import React from "react"
import "./style.css"
import {connect} from "react-redux"
import {Modal,InputGroup,FormControl,DropdownButton,Dropdown, Button} from "react-bootstrap"
class index extends React.Component {
    render() {
      console.log(this.props.new_member)
      return (
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton id="modalheader">
          </Modal.Header>
          <Modal.Body>
              <div id="main">
                 <h4>Add Member</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
            <InputGroup className="mb-3">
                <FormControl
                name="name"
                value={this.props.newmember.name}
                onChange={(e)=>this.props.set_new_message(e.target.name,e.target.value)}
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon2"
                className="Input"
                
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                name="email"
                value={this.props.newmember.email}
                placeholder="Email"
                onChange={(e)=>this.props.set_new_message(e.target.name,e.target.value)}
                aria-label="Email"
                aria-describedby="basic-addon2"
                className="Input"
                />
            </InputGroup>
            <InputGroup className="mb-3" style={{width:"100%"}}>
                <DropdownButton
                name="role"
                value={this.props.newmember.role}
                className="RoleDropDown"
                variant="outline-secondary"
                title="Role"
                id="mybutton"
                >
                <Dropdown.Item>Action</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
                <Button id="CreateButton">
                    Create
                </Button>
  </div>
          </Modal.Body>
        </Modal>
      );
    }
  }
  const mapStateToProps=(state)=>{
    return{
      newmember:state.membersReducer.newMember
    }
  }
  const mapDispatchToProps=(disaptch)=>{
    return{
      set_new_message:(key,value)=>disaptch({type:"SETNEWMEMBER",key,value})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(index)
  