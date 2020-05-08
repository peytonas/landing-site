import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function NavBar() {

  return (
    <div className="row justify-content-left bg-dark">
      <nav>
        <Link className="text-success ml-1" to="/">
          Home
        </Link>
      </nav>
    </div>
  );
}

export default withRouter(NavBar);