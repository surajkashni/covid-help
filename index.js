const express=require('express');
const app=express();
const https=require('https');


app.use(express.static('public'));


app.get("/",(req,res)=>{
  var requestOptions = {
    method: 'GET',
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://api.covidindiatracker.com/state_data.json", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
     res.send("<h1>result[0].active</h1>");
});

app.get("/index.html",(req,res)=>{
 
res.sendFile(__dirname+"/public/index.html")
  });
  app.get("/help.html",(req,res)=>{
    res.sendFile(__dirname+"/public/help.html")
  });
  app.get("/faq.html",(req,res)=>{
    res.sendFile(__dirname+"/public/faq.html")
  });
  app.get("/mythbuster.html",(req,res)=>{
    res.sendFile(__dirname+"/public/mythbuster.html")
  });

app.listen(8000);