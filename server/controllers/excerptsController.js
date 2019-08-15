module.exports = {
    getRandomExcerpt: async (req, res) => {
        try {
            const db = req.app.get('db')
            const allExcerpts = await db.get_all_excerpts([])
            const index = Math.floor((Math.random() * (allExcerpts.length - 1)))
            if (req.session.excerpt) {
                return res.status(200).send(req.session.excerpt)
            }
            req.session.excerpt = allExcerpts[index]
            console.log(req.session)
            res.status(200).send(allExcerpts[index])

        }
        catch(err) {
            res.status(500).send(`Error in retrieving excerpt: ${err}`)
        }
    },
    currentExcerpt: (req, res) => {
        if (req.session.excerpt) {
            res.status(200).send(req.session.excerpt)
        }
    },
    getNewExcerpt: async (req, res) => {
        try {
            delete req.session.excerpt
            const db = req.app.get('db')
            const allExcerpts = await db.get_all_excerpts([])
            const index = Math.floor((Math.random()) * (allExcerpts.length - 1))
            req.session.excerpt = allExcerpts[index]
            console.log(req.session)
            res.status(200).send(allExcerpts[index])
        }
        catch(err) {
            res.status(500).send(`Error in retrieving excerpt: ${err}`)
        }
    }
}