module.exports = {
    get: (req,res) => {
        res.render('/message/:'+req.body.userName)
    }
}