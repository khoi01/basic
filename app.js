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
app.use('/user',require('./routes/user/createUser'));
app.use('/user',require('./routes/user/listUser'));

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



//localhost:3000/user/api/createUser  (POST)
//localhost:3000/user/api/listUser (GET)
//localhost:3000/authentication/api/login (POST)