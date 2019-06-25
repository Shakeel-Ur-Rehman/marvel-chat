import React, { Component } from 'react'
import InboxDetail from './InboxDetail';
import { Container } from 'react-bootstrap';
import Switch from "react-switch";
import {connect} from 'react-redux'

 class SideBarRight extends Component {
    render() {
        return (
            <div>    
            <div style={{display:"flex",flexDirection:"column"}}>
            <InboxDetail/>
            <div>
                <div  style={{background:"white",height:"52px",padding:"10px",marginBottom:"10px"}}>
                <p style={{float:"left",fontSize:"20px"}}>Take Ownership</p>
                 <div style={{float:"right"}}>
                    <Switch
                        checked={this.props.active}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={15}
                        width={35}
                        className="react-switch"
                        id="material-switch"
                        onChange={()=>this.props.changeActiveOwnership()}
                    />
                 </div>
                </div>
            </div>
            <div style={{background:"white"}}>
            <Container>
            <h5 style={{textAlign:"center",margin:"20px 0px",fontSize:"22px",fontWeight:700}}>Other Infromation</h5>
            <div style={{background:"#E9EBEE",height:"180px",marginBottom:"5px"}}></div>
            <div style={{background:"#E9EBEE",height:"180px",marginBottom:"5px"}}></div>
            <div style={{background:"#E9EBEE",height:"180px",marginBottom:"5px"}}></div>
            </Container>
            </div>
            </div>
        </div >
        )
    }
}
function mapStateToProps(state) {
    return {
    active: state.simpleReducer.active_ownership
    };
  }
function mapDispatchToProps(dispatch){
  
    return{
        changeActiveOwnership:()=>dispatch({type:"ChangeActiveOwnership"})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SideBarRight);
