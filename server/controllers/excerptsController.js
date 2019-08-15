module.exports = {
    getRandomExcerpt: async (req, res) => {
        try {
            const db = req.app.get('db')
            const allExcerpts = await db.get_all_excerpts([])
            const index = Math.floor((Math.random() * (allExcerpts.length - 1)))
            res.status(200).send(allExcerpts[index])

        }
        catch(err) {
            res.status(500).send(`Error in retrieving excerpt: ${err}`)
        }
    }
}