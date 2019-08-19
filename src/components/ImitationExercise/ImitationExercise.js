import React, { Component } from "react";
import "./ImitationExercise.scss";
import axios from "axios";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class ImitationExercise extends Component {
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
    // console.log(this.state.userInput);
  }

  getNewExcerpt = () => {
    axios.get("/api/excerpts/new-excerpt").then(res => {
      this.setState({
        randomExcerpt: res.data
      });
    });
  };

  saveImitation = () => {
    const {userInput: completed_imitation_text} = this.state
    const {user_id} = this.props
    const {excerpt_id} = this.state.randomExcerpt
    axios.post('/api/imitations', {completed_imitation_text, user_id, excerpt_id})
         .then(res => {
           this.props.history.push('/imitations')
         })
  }

  render() {
    console.log(this.state)
    return (
      <div className="imitation-exercise">
        <div className='page-contents'>
        <header>
          <h1>Imitate</h1>
        </header>
          <div className="image-container">
            <img
              src={this.state.randomExcerpt.excerpt_image}
              alt="author-pic"
            />
          </div>
          <div className="excerpt-container">
            <div>
              <p>{this.state.randomExcerpt.excerpt_text}</p>
              <p>{this.state.randomExcerpt.excerpt_author}</p>
              <p>{this.state.randomExcerpt.excerpt_narrative}</p>
            </div>
          </div>
          <div className="imitation-container">
            <textarea
              onChange={e => this.handleChange(e, "userInput")}
              rows="6"
              cols="30"
            />
          </div>
          <div className="button-container">
            <button onClick={this.getNewExcerpt}>New Excerpt</button>
            <button onClick={this.saveImitation}>Save Imitation</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const {user_id} = reduxState
  return {user_id}
}

export default connect(mapStateToProps)(withRouter(ImitationExercise))