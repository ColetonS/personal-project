import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import "./Profile.scss";
import axios from "axios";

class Profile extends Component {
  state = {
    imageInput: ""
  };

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //     console.log(prevProps, prevState)
  //     if (prevProps !== this.props) {
  //         this.setState({
  //             imageInput: ''
  //         })
  //     }
  // }

  updateUser = user_id => {
    const { imageInput: user_image } = this.state;
    axios
      .put(`/api/users/${user_id}`, { user_image })
      .then(res => {
        const { user_id, user_image, username } = res.data[0];
        this.props.setUser({ user_id, user_image, username });
      })
      .catch(() => {
        alert("Error, I guess.");
      });
    this.setState({
      imageInput: ""
    });
  };

  render() {
    return (
      <div className="profile-container">
        <header className="profile-header">
          <h3>Update Profile Image</h3>
        </header>
        <div>
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
        <div className="edit-image">
          <p>Enter the image URL here</p>
          <input
            value={this.state.imageInput}
            onChange={e => this.handleChange(e, "imageInput")}
            type="text"
          />
          <button onClick={() => this.updateUser(this.props.user_id)}>
            Submit
          </button>
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
