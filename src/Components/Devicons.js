import React, { Component } from 'react';
import './Devicons.css'
import '../RETRO-bootstrap.css'

class Devicons extends Component {

  render() {
    return (
      <div className="d-flex flex-column ml-5">
        <div className="col-5 mt-5">
          <i className="devicon-vuejs-plain colored devicon-size"></i>
          <i className="devicon-react-original colored devicon-size"></i>
          <i className="devicon-mongodb-plain colored devicon-size"></i>
          <i className="devicon-express-original colored devicon-size"></i>
          <i className="devicon-nodejs-plain colored devicon-size"></i>
        </div>
        <div className="col-5 mt-n4">
          <i className="devicon-csharp-plain colored devicon-size"></i>
          <i className="devicon-mysql-plain colored devicon-size"></i>
          <i className="devicon-javascript-plain colored devicon-size"></i>
          <i className="devicon-html5-plain-wordmark colored devicon-size"></i>
          <i className="devicon-css3-plain-wordmark colored devicon-size"></i>
        </div>
      </div>
    )
  }
}

export default Devicons