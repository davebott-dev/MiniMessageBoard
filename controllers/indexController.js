const db = require("../models/query");
const { body, validationResult } = require("express-validator");

const validations = [
  body("text")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "Your message could not be added to the message board. Your message must be between 1 and 50 characters!"
    ),
  body("username")
    .trim()
    .isLength({ min: 1, max: 15 })
    .withMessage(
      "Your username could not be added to the message board. Your username must be between 1 and 15 characters!"
    ),
];

exports.importData = async (req, res) => {
  const data = await db.getData();
  res.render("index", { title: "Mini Message Board", messages: data });
};

exports.createDataPost = [
  validations,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("error", { errors: errors.array() });
    }
    const formData = req.body;
    await db.insertData(
      formData.text,
      formData.username,
      new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }) +
        " " +
        new Date().toLocaleTimeString()
    );
    res.redirect("/");
  },
];

exports.deletePost = async (req, res) => {
  const index = req.params.messageId;
  const data = await db.deleteData(index);
  res.redirect("/");
};
