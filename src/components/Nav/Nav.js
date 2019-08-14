import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/reducer'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Nav extends Component {
    

    logout = () => {
        axios.delete('/api/auth/logout').then(() => {
            this.props.logoutUser()
            this.props.history.push('/')
        })
    }

    render() {

        console.log(this.props)
        return (
            <div>
                <div>
                    Nav
                </div>
                <img src={this.props.user_image} alt='profile-pic' />
                <h3>{this.props.username}</h3>
                <div className="logout">
                    <button onClick={this.logout}>Logout</button>
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