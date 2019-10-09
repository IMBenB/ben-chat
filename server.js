const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




const fs=require('fs')


app.get('/welcome', (req, res)=>{
    try{
      fs.readFile('./public/welcome.html','utf8',(err,data)=>{
        if (err) throw err
        // console.log(data)
        res.send(`${data}`);
      })
    } catch(err){
      console.log(err)
    }
})





let message=[{user:'start chat', message:'now'}];

app.get('/content', (req,res)=>{
    res.send(message)
})

app.post('/insertText',(req,res)=>{
    message.push(req.body);
    res.send(message);
})

let port = process.env.PORT || 52;

app.listen(port, function () {
    console.log('we are on', port)
})