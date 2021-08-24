const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//route
app.get('/',function(req,res){
    receive();
    res.send("hi");

});



app.use('/authentication',require('./routes/authentication/login'));


app.post('/postData',function(req,res){
    
    receiveData(req.body.nama,req.body.user);
    res.send("data receive");
});


function receive(){
    console.log("hello world");
}

function receiveData(value1,value2){
    console.log(value1,value2);
}

app.listen(3000);
console.log("server runnning "+3000);



//1) 2 parameter/value send to server
//2) 3 route 1 post, 2 get
//3) add 1 package - ip
//4) app.use - seperate file/folder  - google
