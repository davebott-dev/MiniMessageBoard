const db = require("../models/query");

async function importData(req, res) {
  const data = await db.getData();
  console.log(data);
  res.render("index", { title: "Mini Message Board", messages: data });
}

async function createDataPost(req, res) {
  const formData = req.body;
  await db.insertData(
    formData.text,
    formData.username,
    new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    })+ ' '+ new Date().toLocaleTimeString()
  );
  res.redirect("/");
}

module.exports = {
  importData,
  createDataPost,
};
