
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "signup" 
});

// Signup API
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("DB Error:", err);
      return res.json("Error");
    }
    console.log("Inserted ID:", result.insertId);
    return res.json("Success");
  });
});


// Login API
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

  db.query(sql, [req.body.email,req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
        return res.json("Success");
    } else {
        return res.json("Fail");
  }
});
});

app.listen(8081, () => {
  console.log("Server running on port 8081");
});
