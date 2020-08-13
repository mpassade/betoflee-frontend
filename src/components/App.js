import React, { Component } from 'react'
import Header from './Header'
import Search from './Search'
import Widgets from './Widgets'
import Sidebar from './Sidebar'

class App extends Component {
  render(){
    return (
      <>
        <Header/>
        <div className='nav'>
          <Search/>
          <Widgets/>
        </div>
        <Sidebar/>
      </>
    )
  }
}

export default App
