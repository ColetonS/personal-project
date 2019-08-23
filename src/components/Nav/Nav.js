import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../ducks/reducer";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {

  logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      this.props.logoutUser();
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <div
          className="nav"
        >
          <div className="profile-info-container">
            {this.props.user_image ? (
              <img src={this.props.user_image} alt="profile-pic" />
            ) : (
              <img
                src="https://en.es-static.us/upl/2019/08/tardigrade-water-bear-Dec-8-2015-800x428.jpg"
                alt="profile-pic"
              />
            )}
            <Link to="/profile">
              <h3>{this.props.username}</h3>
            </Link>
          </div>
          <div className="link-container">
            <div>
              <Link to="/dashboard">
                <p>Home</p>
              </Link>
            </div>
            <div>
              <Link to="/imitations">
                <p>Imitations</p>
              </Link>
            </div>
            <div className="logout">
              <p onClick={this.logout}>Logout</p>
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { username, user_image } = reduxState;
  return { username, user_image };
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Nav));
