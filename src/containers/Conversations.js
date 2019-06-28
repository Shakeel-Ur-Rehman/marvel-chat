import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import SideBarRight from '../components/SideBarRight';
import Messenger from '../components/Messenger';
import {connect} from 'react-redux'
import { featch_thread_list } from './Api';

 class Conversations extends Component {
  componentDidMount(){
    featch_thread_list(this.props.dispatch)
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
