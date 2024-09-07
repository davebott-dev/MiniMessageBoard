const db = require("../models/query");

exports.getSinglePost = async (req, res) => {
  const index = req.params.messageId;
  const data = await db.getSingleMessage(index);
  res.render("singleMessage", {
    text: data[0].text,
    username: data[0].username,
    added: data[0].added,
    index: data[0].id
  });
};
