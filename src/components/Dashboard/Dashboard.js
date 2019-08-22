import React, { Component } from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header className="dash-head">
          <h1>Write On</h1>
        </header>
        <div className="dash-main">
          <div className="dash-buttons">
            <Link to="/imitation-exercise">
              <button>Imitate</button>
            </Link>
          </div>
        </div>
        <footer className="dash-foot">
          <Link to="/email">
            <h4>Contact</h4>
          </Link>
        </footer>
      </div>
    );
  }
}
