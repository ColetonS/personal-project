import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'
import {withRouter} from 'react-router-dom'


class App extends Component {
 constructor() {
   super()

   this.state = {

   }
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

export default withRouter(App)
