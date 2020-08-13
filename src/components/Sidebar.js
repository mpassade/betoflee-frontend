import React, { Component } from 'react'
import Option from './Option'

class Sidebar extends Component {
    render(){
        return (
            <div className='sidebar'>
                <Option
                    text='Top Songs'
                />
                <Option
                    text='Mixtapes'
                />
                <Option
                    text='Singles'
                />
                <Option
                    text='Featured On'
                />
                <Option
                    text='All Songs'
                />
            </div>
        )
    }
}

export default Sidebar
