import React, { Component } from 'react'
import './hero.css'

class Hero extends Component {
  render() {
    return (
      <header className='Hero'>
        <h1>GUINNESS HOCKEY {this.context.activePage}</h1>
      </header>
    )
  }
}

export default Hero