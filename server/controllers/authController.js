module.exports = {
    register: async (req, res) => {
    //    console.log('hit')
        try {
            const db = req.app.get('db')
            const {username, password} = req.body
            
            const user = await db.get_username([username])
            if (user.length > 0) {
                return res.status(400).send({message: 'Username in use'})
            }
            const newUser = await db.insert_user_info({username, password})
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
            if (user === 0) {
                return res.status(400).send({message: 'User not found'})
            }
            if (password === user[0].password) {
                req.session.user = user[0]
                return res.status(200).send({
                    message: 'Logged in',
                    user: req.session.user,
                    loggedIn: true
                })
            }
        }
        catch(err) {
            res.status(500).send(`Error in login method: ${err}`)
        }
    }
}