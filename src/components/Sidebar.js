import React, { Component } from 'react'
import Searchbar from './Searchbar';
import Dropdowns from './Dropdowns';
import Inbox from './Inbox';
export default class Sidebar extends Component {
    render() {
        return (
            <div style={{background:"white"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                <Searchbar/>
                <Dropdowns/>
                <Inbox/>
                </div>
            </div>
        )
    }
}
