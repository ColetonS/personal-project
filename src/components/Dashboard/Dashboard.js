import React, {Component} from 'react'
import './Dashboard.scss'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    

    render() {
        return (
            <div className='dashboard'>
                <header>
                    <h1>Welcome to This App</h1>
                </header>
                <div className="dash-buttons">
                    <Link to='/imitation-exercise'>
                        <button>Imitate</button>
                    </Link>
                </div>
            </div>
        )
    }
}