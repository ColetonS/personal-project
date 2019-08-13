const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
    //    console.log('hit')
        try {
            const db = req.app.get('db')
            const {username, password} = req.body
            
            const user = await db.get_username([username])
            if (user.length > 0) {
                return res.status(409).send({message: 'Username in use'})
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const newUser = await db.insert_user_info({username, password:hash})
            delete newUser[0].password
            req.session.user = newUser[0]
            // console.log(req.session)
            res.status(200).send({
                message: 'Logged in',
                user: req.session.user,
                loggedIn: true
            })
    }
        catch(err) {
            res.status(500).send(`Error in register method: ${err}`)
        }
    },
    login: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {username, password} = req.body 
            const user = await db.get_username([username])
            if (user.length === 0) {
                return res.status(401).send({message: 'User not found'})
            }
            console.log(user)
            const result = bcrypt.compareSync(password, user[0].password)
            console.log(result)
            if (result) {
                delete user[0].password
                req.session.user = user[0]
                return res.status(200).send({
                    message: 'Logged in',
                    user: req.session.user,
                    loggedIn: true
                })
            }
            return res.status(401).send({message: 'Incorrect password'})
        }
        catch(err) {
            res.status(500).send(`Error in login method: ${err}`)
        }
    }
}