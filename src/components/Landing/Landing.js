import React, { Component } from "react";

export default class Landing extends Component {
  state = {
      usernameInput: '',
      passwordInput: ''
  };

  handleChange(e, key) {
    // console.log(this.state)
    this.setState({
        [key]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className='login-or-register'>
          <input onChange={e => this.handleChange(e, 'usernameInput')} type='text' placeholder='username'/>
          <input onChange={e => this.handleChange(e, 'passwordInput')} type='password' placeholder='password'/>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    );
  }
}
