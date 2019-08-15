import React, { Component } from "react";
import "./ImitationExercise.scss";
import axios from "axios";

export default class ImitationExercise extends Component {
  state = {
    randomExcerpt: {},
    userInput: "",
    currentExcerpt: {}
  };

  componentDidMount() {
    axios.get("/api/excerpts").then(res => {
      this.setState({
        randomExcerpt: res.data
      });
      axios.get("/api/excerpts/currentExcerpt").then(res => {
        this.setState({
          currentExcerpt: res.data
        });
      });
    });
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
    console.log(this.state.userInput);
  }

  getNewExcerpt = () => {
    axios.get("/api/excerpts/new-excerpt").then(res => {
      this.setState({
        randomExcerpt: res.data
      });
    });
  };

  render() {
    // console.log(this.state)
    return (
      <div className="imitation-exercise">
        <header>
          <h1>Welcome to the Imitation Exercise</h1>
        </header>
          <div className="image-container">
            <img
              src={this.state.randomExcerpt.excerpt_image}
              alt="author-pic"
            />
          </div>
        <div className='excerpt-container'>
          <div>
            <p>{this.state.randomExcerpt.excerpt_text}</p>
            <p>{this.state.randomExcerpt.excerpt_author}</p>
            <p>{this.state.randomExcerpt.excerpt_narrative}</p>
          </div>
        </div>
        <div className="imitation-container">
          <textarea
            onChange={e => this.handleChange(e, "userInput")}
            rows="20"
            cols="100"
          />
        </div>
        <div className="button-container">
          <button onClick={this.getNewExcerpt}>New Excerpt</button>
        </div>
      </div>
    );
  }
}
