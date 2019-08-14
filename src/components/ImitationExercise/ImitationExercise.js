import React, {Component} from 'react'
import './ImitationExercise.scss'

export default class ImitationExercise extends Component {
    

    render() {
        return (
            <div className='imitation-exercise'>
                <header>
                    <h1>Welcome to the Imitation Exercise</h1>
                </header>
                <div className="excerpt-container">
                    <p></p>
                </div>
                <div className="imitation-container">
                    <textarea rows='20' cols='100'></textarea>
                </div>
            </div>
        )
    }
}