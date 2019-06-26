import React from "react"
import "./style.css"
import {connect} from "react-redux"
import {SET_NEW_MEMBER,Add_Member} from '../../../lib/redux/Actions/membersAction'
import {Modal,InputGroup,FormControl,DropdownButton,Dropdown, Button} from "react-bootstrap"
class index extends React.Component {
  constructor(props){
    super(props);
  }
 
    render() {
      console.log(this.props.newmember)
      return (
        <Modal
          animation={true}
          onHide={this.props.onHide}
          show={this.props.show}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton id="modalheader">
          </Modal.Header>
          <Modal.Body>
              <div id="main">
                 <h4 id="heading_add">Add Member</h4>
                    <p id="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nibh vitae...
                    </p>
            <InputGroup className="mb-3">
                <FormControl
                name="name"
                value={this.props.newmember.name}
                onChange={(e)=>{this.props.set_member(e.target.name,e.target.value)}}
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon2"
                className="Input"
                
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                name="email"
                placeholder="Email"
                value={this.props.newmember.email}
                aria-label="Email"
                aria-describedby="basic-addon2"
                onChange={(e)=>{this.props.set_member(e.target.name,e.target.value)}}
                className="Input"
                />
            </InputGroup>
            
            <InputGroup className="mb-3" style={{width:"100%",background:"ffffff"}}>
            <Dropdown name="role" className="RoleDropDown"  onSelect={(e)=>{this.props.set_member("role",e)}}>
              <Dropdown.Toggle id="mybutton"  >
              {this.props.newmember.role}
                </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
                <Dropdown.Item eventKey="Super Admin">Super Admin</Dropdown.Item>
                <Dropdown.Item eventKey="Manager">Manager</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </InputGroup>
                <Button id="CreateButton" onClick={()=>{this.props.add_member();
                this.props.onHide()
                }}>
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
      set_member:(key,value)=>disaptch({type:SET_NEW_MEMBER,key,value}),
      add_member:()=>disaptch({type:Add_Member})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(index)
  