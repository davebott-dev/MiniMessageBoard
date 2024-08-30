const messages = require('./messageArr')

module.exports = {
  get: (req, res) => {
    res.render("index", { title: "Mini Message Board", messages: messages });
  },
  post: (req, res) => {
    messages.push({
      text: req.body.userMessage,
      user: req.body.userName,
      added: new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })+ ' ' + new Date().toLocaleTimeString(),
      index: messages[messages.length-1].index+1
    });
    res.redirect("/");
  },
};
