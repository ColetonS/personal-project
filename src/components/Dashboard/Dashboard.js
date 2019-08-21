import React, { Component } from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        
        <div className='dash-main'>
          <header>
            <h1>Write On</h1>
          </header>
          <div className="dash-buttons">
            <Link to="/imitation-exercise">
              <button>Imitate</button>
            </Link>
          </div>
          <footer>
            <Link to='/email'>
              <h5>Contact</h5>
            </Link>
          </footer>
        </div>
      </div>
    );
  }
}
