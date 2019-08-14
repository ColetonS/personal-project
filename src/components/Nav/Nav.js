import React, {Component} from 'react'
import {connect} from 'react-redux'

class Nav extends Component {
    

    render() {

        // console.log(this.props)
        return (
            <div>
                Nav
                <img src={this.props.user_image} alt='profile-pic' />
                <h3>{this.props.username}</h3>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {username, user_image} = reduxState
    return {username, user_image}
}

export default connect(mapStateToProps)(Nav)