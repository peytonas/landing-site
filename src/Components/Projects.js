import React, { Component } from 'react';
import './Projects.css'
import '../RETRO-bootstrap.css'

class Projects extends Component {

  render() {
    return (
      <div className="col bg-success mt-4 text-center">
        <h1>My Projects:</h1>
        <div className="row">
          <div className="col overflow">
            <h3><u><a className="text-danger" href="https://hungerhaven.herokuapp.com/" target="_blank" rel="noopener noreferrer">Hunger Haven</a></u></h3>
            <p>A potluck creator app. Users can host/join a potluck event, guests can bring food requested by the host, or volunteer to bring their own food.</p>
            <p>MongoDB, Epress, Vue, Node</p>
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589225922/Misc/HH1_htkqgu.png" alt="HungerHaven screenshot" /><br />
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589225922/Misc/HH2_vnct2i.png" alt="HungerHaven screenshot" /><br />
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589226335/Misc/HH3.png" alt="HungerHaven screenshot" />
          </div>
          <div className="col overflow">
            <h3><u><a className="text-danger" href="https://github.com/peytonas/docket.live" target="_blank" rel="noopener noreferrer">Docket.live</a></u></h3>
            <p>A game-ified polling app similar to "Kahoot". My part of the project involved creation of polls, questions, and question options, as well as displaying/sorting the data being taken in.</p>
            <p>MongoDB, Express, Vue, Node</p>
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589226826/Misc/Docket1_kkxtsh.png" alt="Docket.live screenshot" />
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589226826/Misc/Docket2_ongjpe.png" alt="Docket.live screenshot" />
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589226826/Misc/Docket3_qpslvb.png" alt="Docket.live screenshot" />
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589226826/Misc/Docket4_ag4xuc.png" alt="Docket.live screenshot" />
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589226826/Misc/Docket5_rtv9ev.png" alt="Docket.live screenshot" />
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589226826/Misc/Docket6_q83he5.png" alt="Docket.live screenshot" />
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589226827/Misc/Docket7_torqmm.png" alt="Docket.live screenshot" />
          </div>
          <div className="col overflow">
            <h3><u><a className="text-danger" href="https://ssb-stats.herokuapp.com/" target="_blank" rel="noopener noreferrer">Smash Stats</a></u></h3>
            <p>Statistical comparison of characters from Nintendo's "Super Smash Bros" using a self-written API. Users can compare one character to another or view an individual characters' stats at a glance.</p>
            <p>MongoDB, Express, React, Node</p>
            <img className="project-img mb-2" src="https://res.cloudinary.com/peytonas/image/upload/v1589225923/Misc/Smash_Stats_afapwh.png" alt="SmashStats screenshot" />
          </div>
        </div>
      </div>
    )
  }
}

export default Projects