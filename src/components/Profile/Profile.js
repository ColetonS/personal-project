import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";

export default class Profile extends Component {



    render() {
        return (
            <div>
                <header>
                    <h1>My Profile</h1>
                </header>
                <div className="edit-username">
                    <p>
                        Edit Username
                    </p>
                    <input type='text'/>
                    <button>Submit</button>
                </div>
                <div className="edit_image">
                    <p>
                        Edit Profile Image
                    </p>
                    <input type='text'/>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

// function mapStateToProps(reduxState) {
//     const {username, user_image} = reduxState
//     return {username, user_image}
// }

// export default connect(mapStateToProps, updateImage, updateUsername)(withRouter(Profile))