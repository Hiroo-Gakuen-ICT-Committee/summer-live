const express = require("express");

const app=express();

app.use(express.static("public"));

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "192.168.100.4",
  user: "summer",
  password: "K-ON-summer1",
  port : 3306,
  database: "summerlive"
});

app.get("/",(req,res)=>{
  res.render("index.ejs");
  connection.query(
    'SELECT*FROM media',
    (errow, result) => {
      console.log(result);
    }
  );
});


app.listen(3000);
