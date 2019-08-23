module.exports = {
    updateUser: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {user_image} = req.body
            const {user_id} = req.params
            const {username} = req.session.user
            console.log(req.session)
            const updatedUser = await db.update_user({user_image, user_id, username})
            req.session.user.user_image = user_image
            res.status(200).send(updatedUser)
        }
        catch(err) {
            res.status(500).send(`Error in updating method: ${err}`)
        }
    },
    updateUsername: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {username} = req.body
            const {user_id} = req.params
            const {user_image} = req.session.user
            const user = await db.get_username([username])
            if (user.length > 0) {
                return res.status(409).send({message: 'Username in use'})
            }
            const updatedUsername = await db.update_user({username,user_id, user_image})
            req.session.user.username = username
            res.status(200).send(updatedUsername)
        }
        catch(err) {
            res.status(500).send(`Error in updating username: ${err}`)
        }
    }
}