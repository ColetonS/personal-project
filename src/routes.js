import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import ImitationExercise from './components/ImitationExercise/ImitationExercise'
import Imitations from './components/Imitations/Imitations'
import Imitation from './components/Imitation/Imitation'
import Profile from './components/Profile/Profile'

export default (
    <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route path = '/dashboard' component = {Dashboard} />
        <Route path = '/imitation-exercise' component = {ImitationExercise} />
        <Route path = '/imitations' component = {Imitations} />
        <Route path = '/imitation/:imitationid' component = {Imitation} />
        <Route path = '/profile' component = {Profile} />
    </Switch>
)
