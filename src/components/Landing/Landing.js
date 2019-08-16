import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import "./Landing.scss";


class Landing extends Component {
  state = {
    usernameInput: "",
    passwordInput: ""
  };

  handleChange(e, key) {
    // console.log(this.state)
    this.setState({
      [key]: e.target.value
    });
  }

  registerUser = () => {
    const { usernameInput: username, passwordInput: password } = this.state;
    axios
      .post("/api/auth/register", { username, password })
      .then(res => {
        const { user_id, username, user_image } = res.data.user;
        this.props.setUser({ user_id, username, user_image });
        this.props.history.push("/dashboard");
      })
      .catch(() => {
        alert("Username aready in use");
      });
  };

  loginUser = () => {
    const { usernameInput: username, passwordInput: password } = this.state;
    axios.post("/api/auth/login", { username, password }).then(res => {
      // console.log(res.data.user)
      const { user_id, username, user_image } = res.data.user;
      // console.log({user_id, username, user_image})
      this.props.setUser({ user_id, username, user_image });
      this.props.history.push("/dashboard");
    });
  };

  render() {
    // console.log(this.props.history);
    return (
      <div className="landing">
        <div className="input-container">
          {/* <div className="logo">
            <div>Logo</div>
          </div> */}
          <h1>Write On</h1>
          <div>
            <p>Username:</p>
            <input
              onChange={e => this.handleChange(e, "usernameInput")}
              type="text"
            />
          </div>
          <div>
            <p>Password:</p>
            <input
              onChange={e => this.handleChange(e, "passwordInput")}
              type="password"
            />
          </div>
          <div className='buttons'>
            <button onClick={this.loginUser}>Login</button>
            <button onClick={this.registerUser}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { user_id, username, user_image } = reduxState;
  return { user_id, username, user_image };
}

export default connect(
  mapStateToProps,
  { setUser }
)(Landing);
