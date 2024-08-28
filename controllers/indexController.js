const messages = [
    {
        text: "Hi there!",
        user: "David B.",
        added: new Date()
    },
    {
        text: "Hello World",
        user: "Tech Guy",
        added: new Date()
    }
];

module.exports = {
    get: (req,res) => {
        res.render('index', {title: "Mini Messageboard", messages:messages})
    }
}