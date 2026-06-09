const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"socialmedia"
});

db.connect();

app.post("/addpost",(req,res)=>{

const {username,content}=req.body;

db.query(
"INSERT INTO posts(username,content) VALUES(?,?)",
[username,content],

(err,result)=>{
if(err) throw err;

res.send("Post Added Successfully");
});

});

app.get("/posts",(req,res)=>{

db.query(
"SELECT * FROM posts",
(err,result)=>{

if(err) throw err;

res.send(result);

});

});

app.listen(3000,()=>{
console.log("Server Running...");
});