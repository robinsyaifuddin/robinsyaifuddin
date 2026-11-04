const pool = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query("SELECT * FROM admin WHERE username=$1", [username]);
  const user = result.rows[0];
  if (!user) return res.status(401).json({ message: "Username salah" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Password salah" });
  const token = jwt.sign({ id: user.id, username: user.username }, "secretkey");
  res.json({ token });
};

exports.getInformasi = async (req, res) => {
  const result = await pool.query("SELECT * FROM informasi");
  res.json(result.rows);
};

exports.updateInformasi = async (req, res) => {
  const { id, judul, isi } = req.body;
  await pool.query("UPDATE informasi SET judul=$1, isi=$2 WHERE id=$3", [judul, isi, id]);
  res.json({ message: "Informasi diupdate" });
};
