import React, { Component } from 'react';
import '../RETRO-bootstrap.css'

class About extends Component {

  render() {
    return (
      <div className="col width text-center">
        <h1><u>About Me</u></h1>
        <div className="text-left">
          <p>
            Hello! My name is Peyton Sonnefeld. I grew up in a small town outside of San Jose, CA, and moved to Idaho
             in the fall of 2011. </p>
          <p>I've been married for almost three years. We don't have any kids yet,
             but my wife and I have a jack-russell terrier/chihuahua named Toby and he's plenty for now!</p>
          <p>I love the outdoors, and I speak French fluently.
          When I'm not coding or adventuring somewhere, I'm probably watching hockey or catching
             up on the huge book/movie list I've had backlogged forever.</p>
          <p>I'm an avid learner, and I'm dedicated to finding the answers to my questions. I strive for excellence in everything I do, and I'm always looking
             to improve and expand my skills, influence, and opportunities.</p>
          <p>If you would like to know more please feel free to contact me by phone at <b>(208)-351-4810</b>, or by clicking any of the
             links in the navbar below. Thank you!</p>
        </div>
      </div>
    )
  }
}

export default About