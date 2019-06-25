import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import SideBarRight from '../components/SideBarRight';
import Messenger from '../components/Messenger';
import {connect} from 'react-redux'

 class Conversations extends Component {
  componentWillMount(){
    /*if(!sessionStorage.getItem("login")){
      this.props.history.push("/login")
    }*/
  }
    render() {
        return (
            <div className="container-fluid" style={{marginTop:"20px"}}>
            <div className="row">
              <div className="col-md-3">
            <Sidebar/>
            </div>
            <div className="col-md-6" style={{padding:"0px"}}>
            <Messenger/>
            </div>
            <div className="col-md-3">
            <SideBarRight/>
            </div>
            </div>
          </div>
        )
    }
}
export default connect()(Conversations)
