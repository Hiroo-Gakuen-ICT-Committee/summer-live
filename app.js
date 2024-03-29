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
  connection.query(
    'SELECT * FROM media ORDER BY id DESC LIMIT 1',
    
    (errow, result) => {
      console.log(result);
      res.render("index.ejs", {
        items: result[0]
      });
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
  connection.query(
    'INSERT INTO media (name) VALUES (?);',
    [req.body.name],
    (errow, result) => {
      res.redirect("/set");
    }
  );
});


app.listen(3000);
