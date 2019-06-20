import React, { Component } from 'react'
import InboxDetail from './InboxDetail';

export default class SideBarRight extends Component {
    render() {
        return (
            <div style={{background:"white",height:"550px"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <InboxDetail/>
            <div>Take Ownership</div>
            <div>Other Details</div>
            </div>
        </div>
        )
    }
}
