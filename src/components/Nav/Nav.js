import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/reducer'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Nav.scss'

class Nav extends Component {
    

    logout = () => {
        axios.delete('/api/auth/logout').then(() => {
            this.props.logoutUser()
            this.props.history.push('/')
        })
    }

    render() {

        // console.log(this.props)
        return (
            <div className='nav'>
                <img src={this.props.user_image} alt='profile-pic' />
                <h3>{this.props.username}</h3>
                    <Link to='/dashboard'>
                        <p>Home</p>
                    </Link>
                <div className="logout">
                    <p onClick={this.logout}>Logout</p>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {username, user_image} = reduxState
    return {username, user_image}
}

export default connect(mapStateToProps, {logoutUser})(withRouter(Nav))