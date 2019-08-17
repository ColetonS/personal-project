import React, { Component } from "react";
import "./Imitations.scss";
import axios from "axios";
import {Link} from 'react-router-dom'

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

  deleteImitation(completed_imitation_id) {
    axios.delete(`/api/imitations/${completed_imitation_id}`)
    .then(res => {
      this.setState({
        allImitations: res.data
      })
    })
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
        <div className="imitation" key={completed_imitation_id}>
          <p>{excerptText}</p>
          <img className="img-class" src={excerpt_image} alt="author-pic" />
          <textarea rows="7" cols="37" defaultValue={imitationText}>
            
          </textarea>
          <div className='imitations-buttons'>
            <Link to='/imitation/:imitationid'>
              <button>Edit</button>
            </Link>
            <button onClick={() => this.deleteImitation(completed_imitation_id)}>Delete</button>
          </div>
        </div>
      );
    });

    return (
      <div className="main-imitations-container">
        <header>
          <h1>My Imitations</h1>
        </header>
        <div className="imitations-container">{mappedImitations}</div>
      </div>
    );
  }
}
