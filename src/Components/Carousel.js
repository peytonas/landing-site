import React, { Component } from 'react';
import '../RETRO-bootstrap.css'
import './Body.css'

class Carousel extends Component {

  render() {
    return (
      <div className="col-2 text-center">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="carousel-img" src="https://www.stickpng.com/assets/images/5a4fbbb7da2b4f099b95da1c.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="carousel-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/San_Francisco_Giants_Logo.svg/1200px-San_Francisco_Giants_Logo.svg.png" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="carousel-img" src="http://assets.stickpng.com/images/580b585b2edbce24c47b2b2c.png" alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel