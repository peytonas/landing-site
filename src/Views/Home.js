import React, { Component } from 'react';
import '../RETRO-bootstrap.css'
import './Home.css'
import Header from '../Components/Header'
import Body from '../Components/Body'

class Home extends Component {

  render() {
    return (
      <div className="row">
        <div className="bg col">
          <Header />
          <Body />
        </div>
      </div>
    )
  }
}

export default Home