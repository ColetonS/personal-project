require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authCtrl = require('./controllers/authController')
const excerptsCtrl = require('./controllers/excerptsController')
const imitationsCtrl = require('./controllers/imitationsController')
const updateUserCtrl = require('./controllers/updateUserController')
const nodeMailerCtrl = require('./controllers/nodeMailerController')

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} puppies on parade`))
})

app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.delete('/api/auth/logout', authCtrl.logout)
app.get('/api/auth/currentUser', authCtrl.currentUser)
app.get('/api/excerpts', excerptsCtrl.getRandomExcerpt)
app.get('/api/excerpts/new-excerpt', excerptsCtrl.getNewExcerpt)
app.get('/api/excerpts/currentExcerpt', excerptsCtrl.currentExcerpt),
app.get('/api/imitations', imitationsCtrl.getAllImitations)
app.delete('/api/imitations/:completed_imitation_id', imitationsCtrl.deleteImitation)
app.post('/api/imitations', imitationsCtrl.addImitation)
app.put('/api/imitations/:completed_imitation_id', imitationsCtrl.updateImitation)
app.put('/api/users/:user_id', updateUserCtrl.updateUser)
app.post('/api/email', nodeMailerCtrl.email)