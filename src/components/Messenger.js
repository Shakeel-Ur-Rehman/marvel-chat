import React, { Component } from 'react'

export default class Messenger extends Component {
    render() {
        return (
            <div style={{background:"white",height:"550px"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div>Messenger Header</div>
            <div>Messages</div>
            <div>MessageInput</div>
            </div>
        </div>
        )
    }
}
