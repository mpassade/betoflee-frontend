import React, { Component } from 'react'
import Option from './Option'

class Sidebar extends Component {
    render(){
        return (
            <div className='sidebar'>
                <Option/>
                <Option/>
                <Option/>
                <Option/>
                <Option/>
            </div>
        )
    }
}

export default Sidebar
