const express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123',
    database : 'portfolio'
  });

var cors =require('cors') 
   
app=express()
app.use(express.json())
app.use(cors())
connection.connect();

app.post('/insert',(req,res)=>{
      connection.query('insert into forms (username,email,subjects,message) values(?,?,?,?)', [req.body.username,req.body.email,req.body.subjects,req.body.message], function (error, results) {
     if (error) {
    console.log(error);
     }
    res.json(results)
    })
  })
  
  app.get('/getall',(req,res)=>{
    connection.query('SELECT * from users where isActive=1;', function (error, results) {
        if (error){
            console.log(error);
        }
        console.log('The solution is: ', results);
        res.json(results)
    
      });
    });




  app.listen(3000,()=>{
    console.log("Listening on port 3000");
  })  
  