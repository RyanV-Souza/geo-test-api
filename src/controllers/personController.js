const client = require("../routes/config/elastic");


exports.get = (req, res, next) => {
    const searchText = req.query.text

    client.search({
        body: {
            query: {
                fuzzy: {
                    nmLogradouro: {
                        value: searchText
                    }
                }
            }
        }
    })
    .then(response => {
        return res.json(response.body.hits)
    })
    .catch(err => {
        return res.status(500).json({"message": err})
    })
};
