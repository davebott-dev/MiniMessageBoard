const messages = [
  {
    text: "Hi there!",
    user: "David B.",
    added: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }) + ' ' + new Date().toLocaleTimeString(),
  },
  {
    text: "Hello World",
    user: "Tech Guy",
    added: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }) + ' ' + new Date().toLocaleTimeString(),
  },
];

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
    });
    res.redirect("/");
  },
};
