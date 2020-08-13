import React, { Component } from 'react'
import Widget from './Widget'

class Widgets extends Component {
    render(){
        return (
            <div className='widgets'>
                <Widget
                    text='Songs'
                />
                <Widget
                    text='Videos'
                />
            </div>
        )
    }
}

export default Widgets