module.exports = {
    updateUser: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {user_image} = req.body
            const {user_id} = req.params
            const {username} = req.session.user
            // console.log(req.session)
            const updatedUser = await db.update_user({user_image, user_id, username})
            res.status(200).send(updatedUser)
        }
        catch(err) {
            res.status(500).send(`Error in updating method: ${err}`)
        }
    }
}