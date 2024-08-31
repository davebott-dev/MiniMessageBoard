const messages = require("./messageArr");

module.exports = {
  get: (req, res) => {
    const  {messageId}  = req.params;
    res.render("singleMessage", {
      text: messages[messageId - 1].text,
      user: messages[messageId - 1].user,
      added: messages[messageId - 1].added,
    });
    
  },
};
