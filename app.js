const express = require("express");
const app=express();
app.use(express.static("public"));

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "192.168.100.4",
  user: "admintest",
  password: "Pass@word1",
  port : 3306,
  database: "free_db"
});


connection.connect();

connection.query('SELECT * from test_table LIMIT 10;', (err, rows, fields) => {
  if (err) throw err;

  console.log('The solution is: ', rows);
});

connection.end();

app.get("/",(req,res)=>{
  res.render("index.ejs")
});


app.listen(3000);
