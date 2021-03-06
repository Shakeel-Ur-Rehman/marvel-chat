import React, { Component } from 'react'
import {Container,Button} from "react-bootstrap"
import AddMemeber from "./AddMember"
import {connect} from "react-redux"
import "./index.css"

 class index extends Component {
    render() {
        return (
            <Container fluid={true} id="maincontainer">
                <h4 id="heading">Members ({this.props.members.length})</h4>
                <Button variant="primary" onClick={this.props.toggleModal}>Add Member</Button>
                <div id="Main">
                    {
                        this.props.members.map(member=>        
                    <div key={member.id} className="mainChilds">
                    <div className="row" style={{height:"100%"}}>
                    <div className="col-md-1" style={{height:"100%"}}>
                        <div className="image"></div>
                    </div>
                    <div className="col-md-2">
                        <h5>{member.name}</h5>
                    </div>
                    <div className="col-md-2">
                        <p>{member.email}</p>
                    </div>
                    <div className="col-md-2">
                       <p>{member.contact}</p>
                    </div>
                    <div className="col-md-2">
                       <p>Sales</p>
                    </div>
                    <div className="col-md-2">
                        <div>{member.role}</div>
                    </div>
                    <div className="col-md-1">
                        <i className="fa fa-close closeIcon" onClick={()=>this.props.removeMember(member.id)}></i>
                    </div>
                    </div>

                    </div>       
                            )
                    }
                <AddMemeber
                show={this.props.modalopen}
                onHide={this.props.toggleModal}
                />       
                </div>
            </Container>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        members:state.membersReducer.members,
        modalopen:state.applicationReducer.Add_Member_Modal_open
    }
}
const mapDispatchToProps=(dispatch)=>{
return{
removeMember:(id)=>dispatch({type:"RemoveMember",id}),
toggleModal:()=>dispatch({type:"ToggleMemberModal"})
}
}
export default connect(mapStateToProps,mapDispatchToProps)(index)