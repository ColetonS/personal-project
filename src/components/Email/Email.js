import React, {Component} from 'react'
import './Email.scss' 
import axios from 'axios'

export default class Email extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            title: '',
            message: '',
            image: ''
        }
    }

    handleInput = e => {
        const {value, name} = e.target
        this.setState({ [name]: value })
    }

    handleSend = () => {
        const { name, email, message, title, image } = this.state
        axios.post('/api/email', { name, email, message, title, image }).then(res => {
            this.setState({
                name: '',
                email: '',
                title: '',
                message: '',
                image: ''
            })
        })
    }

    render() {
        const { name, email, message, title, image } = this.state
        return (
            <div className='email-main'>
                <div className='input-fields'>
                    <h1>Email Me</h1>
                    <input name='title' placeholder='email title' type='text' value={title} onChange={this.handleInput}></input>
                    <input name='name' placeholder='name' type='text' value={name} onChange={this.handleInput}></input>
                    <input name='email' placeholder='email' type='text' value={email} onChange={this.handleInput}></input>
                    <input name='message' placeholder='message' type='text' value={message} onChange={this.handleInput}></input>
                    <input name='image' placeholder='image URL' type='text' value={image} onChange={this.handleInput}></input>
                    <button onClick={this.handleSend}>Send</button>
                </div>
            </div>
        )
    }
}