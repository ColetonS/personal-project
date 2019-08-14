import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUser} from './ducks/reducer'
import axios from 'axios'


class App extends Component {
 constructor() {
   super()

   this.state = {

   }
 }

 componentDidMount() {
   axios.get('/api/auth/currentUser').then(res => {
    this.props.setUser(res.data)
    console.log(res.data)
   })
 }

 render() {
   
  //  console.log(this.props.location.pathname)
   return (
     <div className="App">
       {(this.props.location.pathname !== '/') ? <Nav /> : <></> }
       {routes}
     </div>
   );
 }
 }

export default connect(null, {setUser})(withRouter(App))
