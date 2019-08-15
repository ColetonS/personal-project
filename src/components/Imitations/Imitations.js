import React, { Component } from "react";
import "./Imitations.scss";
import axios from "axios";

export default class Imitations extends Component {
  state = {
    allImitations: []
  };

  componentDidMount() {
    axios.get("/api/imitations").then(res => {
      this.setState({
        allImitations: res.data
      });

      // const imitations = res.data.map(imitation => {
      //     const completedText = imitation.completed_imitation_text
      //     console.log(completedText)
      // })
    });
  }

  render() {
    const mappedImitations = this.state.allImitations.map(imitation => {
      const {
        completed_imitation_id,
        completed_imitation_text,
        user_id,
        excerpt_id
      } = imitation;
      const text = completed_imitation_text;
      return (
        <div key={completed_imitation_id}>
          <p>{text}</p>
        </div>
      );
    });

    return (
      <div className="imitations-container">
        <header>
          <h1>Your Imitations</h1>
          {mappedImitations}
        </header>
      </div>
    );
  }
}
