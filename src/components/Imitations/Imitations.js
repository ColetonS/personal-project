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
    });
  }

  render() {
    const mappedImitations = this.state.allImitations.map(imitation => {
      const {
        completed_imitation_id,
        completed_imitation_text,
        excerpt_text,
        excerpt_author,
        excerpt_narrative,
        excerpt_image
      } = imitation;
      const imitationText = completed_imitation_text;
      const excerptText = excerpt_text;
      return (
        <div className='' key={completed_imitation_id}>
          <p>{excerptText}</p>
          <img src={excerpt_image} alt='author-pic'/>
          <textarea rows="20" cols="100">
            {imitationText}
          </textarea>
        </div>
      );
    });

    return (
      <div className="imitations-container">
        <header>
          <h1>Your Imitations</h1>
        </header>
          <div>
              {mappedImitations}
          </div>
      </div>
    );
  }
}
