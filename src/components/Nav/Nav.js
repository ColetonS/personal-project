import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../ducks/reducer";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  // state = {
  //   showMenu: false,
  //   showImage: false
  // };

  logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      this.props.logoutUser();
      this.props.history.push("/");
    });
  };

  // toggleMenu = () => {
  //   this.setState({
  //     showMenu: !this.state.showMenu,
  //     showImage: !this.state.showImage
  //   });
  // };

  render() {
    // console.log(this.session)
    return (
      <div>
        {/* <div className="burger" onClick={this.toggleMenu}>
          &#9776;
        </div> */}
        <div
          className="nav"
          // style={{ display: this.state.showMenu ? null : "none" }}
        >
          <div className="profile-info-container">
            <img src={this.props.user_image} alt="profile-pic" />
            <Link to='/profile'>
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
