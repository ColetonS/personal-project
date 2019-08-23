import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import "./Profile.scss";
import axios from "axios";

class Profile extends Component {
  state = {
    imageInput: "",
    nameInput: ""
  };

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }

  updateUser = user_id => {
    const { imageInput: user_image } = this.state;
    axios
      .put(`/api/users/${user_id}`, { user_image })
      .then(res => {
        const { user_id, user_image, username } = res.data[0];
        this.props.setUser({ user_id, user_image, username });
        // console.log(this.props)
      })
      .catch(() => {
        alert("Error, I guess.");
      });
    this.setState({
      imageInput: ""
    });
  };

  updateUsername = user_id => {
    const { nameInput: username } = this.state;
    axios
      .put(`/api/users/username/${user_id}`, { username })
      .then(res => {
        console.log(res.data)
        const { user_id, user_image, username } = res.data[0];
        this.props.setUser({ user_id, user_image, username });
      })
      .catch(() => {
        alert(`Taken.`);
      });
    this.setState({
      nameInput: ""
    });
  };

  render() {
    return (
      <div className="main-container">
        <header className="profile-header">
          <h1>Profile</h1>
        </header>
        <div className='profile-container'>
          <div className="img-and-name-container">
            <div className="profile-image-container">
              {this.props.user_image ? (
                <img
                  className="profile-image"
                  src={this.props.user_image}
                  alt="profile-pic"
                />
              ) : (
                <img
                  className="profile-image"
                  src="https://en.es-static.us/upl/2019/08/tardigrade-water-bear-Dec-8-2015-800x428.jpg"
                  alt="profile-pic"
                />
              )}
            </div>
            <div className="profile-username">
              <h2>{this.props.username}</h2>
            </div>
          </div>
          <div className="edit-container">
            <div className="edit-image">
              <p>Update Profile Image</p>
              <input
                value={this.state.imageInput}
                onChange={e => this.handleChange(e, "imageInput")}
                type="text"
              />
              <div className="profile-buttons">
                <button onClick={() => this.updateUser(this.props.user_id)}>
                  Submit
                </button>
              </div>
            </div>
            <div className="edit-name">
              <p>Edit Username</p>
              <input
                value={this.state.nameInput}
                onChange={e => this.handleChange(e, "nameInput")}
                type="text"
              />
              <div className="profile-buttons">
                <button onClick={() => this.updateUsername(this.props.user_id)}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { user_image, user_id, username } = reduxState;
  return { user_image, user_id, username };
}

export default connect(
  mapStateToProps,
  { setUser }
)(Profile);
