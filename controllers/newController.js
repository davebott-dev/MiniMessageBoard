module.exports = {
    get: (req,res) => {
        res.render('new', {title: "New Message Form"});
    },

}