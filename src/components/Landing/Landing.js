import React, { Component } from "react";
import axios from 'axios'

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

  registerUser = () => {
      const {usernameInput:username, passwordInput:password} = this.state
      axios.post('/api/auth/register', {username, password}).then(res => {
          console.log(res)
          this.props.history.push('/dashboard')
      })
      .catch(() => {
          alert('Username aready in use')
      })
  }

  loginUser = () => {
      const {usernameInput:username, passwordInput:password} = this.state
      axios.post('/api/auth/login', {username, password}).then(res => {
          console.log(res)
          this.props.history.push('/dashboard')
      })
  }

  render() {
    return (
      <div>
        <div className='login-or-register'>
          <input onChange={e => this.handleChange(e, 'usernameInput')} type='text' placeholder='username'/>
          <input onChange={e => this.handleChange(e, 'passwordInput')} type='password' placeholder='password'/>
          <button onClick={this.loginUser}>Login</button>
          <button onClick={this.registerUser}>Register</button>
        </div>
      </div>
    );
  }
}
