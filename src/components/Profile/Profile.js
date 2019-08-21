import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setUser} from '../../ducks/reducer'
import './Profile.scss'
import axios from 'axios'


class Profile extends Component {

    state = {
        imageInput: ''
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    updateUser = (user_id) => {
        const {imageInput: user_image} = this.state
        axios.put(`/api/users/${user_id}`, {user_image})
        .then(res => {
            const {user_id, user_image, username} = res.data[0]
            console.log({user_id, user_image})
            this.props.setUser({user_id, user_image, username})
        })
        .catch(() => {
            alert('Error, I guess.')
        })
    }

    render() {
       console.log(this.props)
        return (
            <div className='profile-container'>
                <header className='profile-header'>
                    <h1>My Profile</h1>
                </header>
                {/* <img src={} alt='profile-pic'/> */}
                <div className="edit_image">
                    <p>
                        Edit Profile Image
                    </p>
                    <input onChange={e => this.handleChange(e, 'imageInput')} type='text'/>
                    <button onClick={() => this.updateUser(this.props.user_id)}>Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user_image, user_id, username} = reduxState
    return {user_image, user_id, username}
}

export default connect(mapStateToProps, {setUser})(Profile)