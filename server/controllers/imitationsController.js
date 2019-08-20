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
    },
    deleteImitation: (req, res) => {
        const {completed_imitation_id} = req.params
        const {user_id} = req.session.user
        const db = req.app.get('db')
        db.delete_imitation([completed_imitation_id, user_id]).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(500).send(`Error in deleting imitation: ${err}`)
        })
    },
    addImitation: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {completed_imitation_text, user_id, excerpt_id} = req.body
            const imitation = await db.insert_imitation({completed_imitation_text, user_id, excerpt_id})
            res.status(200).send(imitation)
        }
        catch(err) {
            res.status(500).send(`Error in saving imitation: ${err}`)
        }
    },
    updateImitation: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {completed_imitation_text} = req.body
            const {completed_imitation_id} = req.params
            console.log(completed_imitation_id, completed_imitation_text)
            const updatedImitation = await db.update_imitation({completed_imitation_id, completed_imitation_text})
            res.status(200).send(updatedImitation)
        }
        catch(err) {
            res.status(500).send(`Error in updating imitation: ${err}`)
        }
    }
    
}