const express = require("express");

const app=express();

app.use(express.static("public"));

const mysql = require("mysql2");

app.use(
  express.urlencoded({
    extended: false,
  })
);

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

app.get("/set",(req,res)=>{
  res.render("set.ejs");
  connection.query(
    'SELECT*FROM media',
    (errow, result) => {
      console.log(result);
    }
  );
});

app.post("/vimeo",(req,res)=>{
  console.log(req.body);
  connection.query(
    'SELECT*FROM INSERT INTO media (name) VALUES (?);',
    [req.body.name],
    (errow, result) => {
      console.log(errow);
      console.log(req.body);
      res.redirect("/set");
    }
  );
});


app.listen(3000);
