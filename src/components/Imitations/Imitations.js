import React, { Component } from "react";
import "./Imitations.scss";
import axios from "axios";
// import {Link} from 'react-router-dom'
import Quill2 from "../Quill2";
import Swal from "sweetalert2";

export default class Imitations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allImitations: [],
      userInput: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/imitations").then(res => {
      this.setState({
        allImitations: res.data
      });
    });
  }

  deleteImitation(completed_imitation_id) {
    Swal.fire({
      title: "Are you sure about this?",
      text: `Once it's gone, it's gone!`,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete it, baby!"
    }).then(result => {
      if (result.value) {
        axios
          .delete(`/api/imitations/${completed_imitation_id}`)
          .then(async res => {
            await this.setState({
              allImitations: res.data
            });
            Swal.fire("Deleted!", `Your imitation's gone for good.`, "success");
          });
      }
    });
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  updateImitation = completed_imitation_id => {
    const { userInput: completed_imitation_text } = this.state;
    axios
      .put(`/api/imitations/${completed_imitation_id}`, {
        completed_imitation_text
      })
      .then(res => {
        const {
          completed_imitation_id,
          completed_imitation_text
        } = res.data[0];
      })
      .catch(() => {
        alert(`You've got yerself an error.`);
      });
  };

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
          <div className="excerpt">
            <p>{excerptText}</p>
            <div className="author-container">
              <img className="img-class" src={excerpt_image} alt="author-pic" />
              <p>{excerpt_author}</p>
              <p>{excerpt_narrative}</p>
            </div>
          </div>
          <div className="quill-container">
            <div className="quill">
              <Quill2
                onChange={this.handleChange}
                imitationText={imitationText}
                handleChange={this.handleChange}
              />
            </div>
          </div>

          <div className="imitations-buttons">
            {/* <Link to='/imitation/:imitationid'> */}
            {/* <button onClick={() => this.updateImitation(completed_imitation_id)}>Update</button> */}
            {/* </Link> */}
            <button
              onClick={() => this.deleteImitation(completed_imitation_id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="main-imitations-container">
        <header className="imitations-header">
          <h1>My Imitations</h1>
        </header>
        <div className="imitations-container">{mappedImitations}</div>
      </div>
    );
  }
}
