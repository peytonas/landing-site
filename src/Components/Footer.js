import React, { Component } from 'react';
import '../RETRO-bootstrap.css'
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className="col-3 text-center">
        <a href="https://github.com/peytonas" target="_blank" rel="noopener noreferrer"><i
          className="devicon-github-plain navbar-devicon text-primary"></i></a>
        <a href="https://www.linkedin.com/in/peyton-sonnefeld-342b4194/" target="_blank" rel="noopener noreferrer"><i
          className="fab fa-linkedin navbar-devicon text-primary ml-1"></i></a>
        <a href="https://www.facebook.com/peyton.sonnefeld" target="_blank" rel="noopener noreferrer"><i
          className="devicon-facebook-plain navbar-devicon text-primary ml-1"></i></a>
        <a href="mailto:peyton.sonnefeld@gmail.com"><i className="devicon-google-plain navbar-devicon text-primary ml-1"></i></a>
      </div>
    )
  }
}

export default Footer