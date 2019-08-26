import React, { Component } from "react";
import "./Email.scss";
import axios from "axios";
import Swal from "sweetalert2";

export default class Email extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      title: "",
      message: "",
      image: ""
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSend = () => {
    const { name, email, message, title, image } = this.state;
    axios
      .post("/api/email", { name, email, message, title, image })
      this.setState({
        name: "",
        email: "",
        title: "",
        message: "",
        image: ""
      })
      Swal.fire("Message sent!", `The developer will respond ASAP.`, "success");
    };

  render() {
    const { name, email, message, title, image } = this.state;
    return (
      <div className="email-main">
        <div className='header-and-input-container'>
          <div className="email-header">
            <h1>Contact Creator</h1>
          </div>
          <div className="email-inputs">
            <input
              name="title"
              placeholder="subject"
              type="text"
              value={title}
              onChange={this.handleInput}
            />
            <input
              name="name"
              placeholder="name"
              type="text"
              value={name}
              onChange={this.handleInput}
            />
            <input
              name="email"
              placeholder="email"
              type="text"
              value={email}
              onChange={this.handleInput}
            />
            <input
              name="message"
              placeholder="message"
              type="text"
              value={message}
              onChange={this.handleInput}
            />
            <input
              name="image"
              placeholder="image URL"
              type="text"
              value={image}
              onChange={this.handleInput}
            />
          </div>
          <div className="email-button">
            <button onClick={this.handleSend}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}
