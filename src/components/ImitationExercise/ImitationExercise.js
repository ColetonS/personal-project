import React, {Component} from 'react'
import './ImitationExercise.scss'
import axios from 'axios'

export default class ImitationExercise extends Component {
    state = {
        randomExcerpt: {},
        userInput: ''
    }

    componentDidMount() {
        axios.get('/api/excerpts').then(res => {
            this.setState({
                randomExcerpt: res.data
            })
            console.log(res.data)
            console.log(this.state.randomExcerpt)
        })
    }

    render() {

        return (
            <div className='imitation-exercise'>
                <header>
                    <h1>Welcome to the Imitation Exercise</h1>
                </header>
                <div className="excerpt-container">
                    <p>
                        {this.state.randomExcerpt.excerpt_text}
                    </p>
                    <p>{this.state.randomExcerpt.excerpt_author}</p>
                    <p>{this.state.randomExcerpt.excerpt_narrative}</p>
                </div>
                <div className="imitation-container">
                    <textarea rows='20' cols='100'></textarea>
                </div>
            </div>
        )
    }
}