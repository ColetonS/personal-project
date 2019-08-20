import React, { Component } from "react";
import "./Imitations.scss";
import axios from "axios";
// import {Link} from 'react-router-dom'
import Quill2 from '../Quill2'

export default class Imitations extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      allImitations: [],
      userInput: ''
    };

    this.handleChange = this.handleChange.bind(this)

  }

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

  handleChange(val) {
    console.log(this.state)
    this.setState({
      userInput: val
    })
  }

  updateImitation = (completed_imitation_id) => {
    console.log('hit')
    const {userInput: completed_imitation_text} = this.state
    console.log(completed_imitation_text)
    axios.put(`/api/imitations/${completed_imitation_id}`, {completed_imitation_text})
    .then(res => {
        console.log(res.data)
        const {completed_imitation_id, completed_imitation_text} = res.data[0]
    })
    .catch(() => {
      alert(`You've got yerself an error.`)
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
          <br/>
          <p>{excerptText}</p>
          <br/>
          <img className="img-class" src={excerpt_image} alt="author-pic" />
            <br />
            <br />
          <div>
            <Quill2 
                onChange={this.handleChange} imitationText={imitationText} 
                handleChange={this.handleChange}
            />
            {/* <p>{imitationText}</p> */}
          </div>
          <br/>
          <br/>
          <div className='imitations-buttons'>
            {/* <Link to='/imitation/:imitationid'> */}
              <button onClick={() => this.updateImitation(completed_imitation_id)}>Update</button>
            {/* </Link> */}
            <button onClick={() => this.deleteImitation(completed_imitation_id)}>Delete</button>
          </div>
          <br/>
          <br/>
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
