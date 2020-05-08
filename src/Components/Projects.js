import React, { Component } from 'react';
import './Projects.css'
import '../RETRO-bootstrap.css'

class Projects extends Component {

  render() {
    return (
      <div className="col bg-success mt-5 text-center">
        <h1>My Projects:</h1>
        <div className="row">
          <div className="col">
            <h3><u><a className="text-danger" href="https://hungerhaven.herokuapp.com/" target="_blank" rel="noopener noreferrer">Hunger Haven</a></u></h3>
            <p>A potluck creator app!</p>
            <p>MongoDB, Epress, Vue, Node</p>
          </div>
          <div className="col">
            <h3><u><a className="text-danger" href="https://ssb-stats.herokuapp.com/" target="_blank" rel="noopener noreferrer">Smash Stats</a></u></h3>
            <p>Compares characters from Super Smash Bros Ultimate</p>
            <p>MongoDB, Express, React, Node</p>
          </div>
          <div className="col">
            <h3><u><a className="text-danger" href="https://github.com/peytonas/docket.live" target="_blank" rel="noopener noreferrer">Docket.live</a></u></h3>
            <p>Game-ified polling app.</p>
            <p>MongoDB, Express, Vue, Node</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects