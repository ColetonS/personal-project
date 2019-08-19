import React, {Component} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const style = {
    quillStyle: {
        height: '100%'
    }
}

export default class Quill2 extends Component {
    constructor(props) {
      super(props)
      this.state = { text: this.props.imitationText } 
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(value) {
      this.setState({ text: value })
    }
  
    render() {
      return (
        <ReactQuill value={this.state.text}
                    onChange={this.handleChange}
                    style={style.quillStyle}
                    />
      )
    }
  }