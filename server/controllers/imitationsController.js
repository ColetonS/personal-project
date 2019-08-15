module.exports = {
    getAllImitations: async (req, res) => {
        try {
            const {user_id} = req.session.user
            const db = req.app.get('db')
            const imitations = await db.get_all_imitations([user_id])
            res.status(200).send(imitations)
        }

        catch(err) {
            res.status(500).send(`Error in retrieving imitations: ${err}`)
        }
    }
}