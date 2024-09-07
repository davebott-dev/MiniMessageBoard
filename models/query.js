const pool = require("./pool");

exports.getData = async () => {
  const { rows } = await pool.query("SELECT * FROM messageboard;");
  return rows;
};

exports.insertData = async (text, username, added) => {
  await pool.query(
    "INSERT INTO messageboard (text,username,added) VALUES ($1, $2, $3)",
    [text, username, added]
  );
};

exports.getSingleMessage = async (index) => {
  const { rows } = await pool.query(
    "SELECT * FROM messageboard WHERE id = ($1)",
    [index]
  );
  return rows;
};

exports.deleteData = async(index) => {
  await pool.query("DELETE FROM messageboard WHERE id =($1)", [index])
}
