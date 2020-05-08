import React, { Component } from 'react';
import Carousel from './Carousel'
import FamilyPic from './FamilyPic'
import Devicons from './Devicons'
import Projects from './Projects'
import Footer from './Footer'
import '../RETRO-bootstrap.css'
import './Body.css'

class Body extends Component {

  render() {
    return (
      <div>
        <div className="row text-dark">
          <Carousel />
          <FamilyPic />
          <Devicons />
        </div>
        <div className="row text-dark">
          <Projects />
        </div>
        <div className="row text-primary fixed-bottom justify-content-center">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Body