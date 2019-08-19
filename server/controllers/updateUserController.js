module.exports = {
    updateUser: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {user_image} = req.body
            const {user_id} = req.params
            // console.log(user_image, user_id)
            const updatedUser = await db.update_user({user_image, user_id})
            res.status(200).send(updatedUser)
        }
        catch(err) {
            res.status(500).send(`Error in updating method: ${err}`)
        }
    }
}