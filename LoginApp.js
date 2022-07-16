var exp=require("express");

var app=exp();

app.listen(8000,function(){
console.log("Express Server Hosted at 8000")});

app.get('/home',function(req,res){
	res.send("Welcome to Web App");
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/LoginPage.html");
});

app.get('/sendlogin',function(req,res){
	if(req.query.uid=="object"&&req.query.pwd=="knowit")
		res.send("Login Successful");
	else
		res.send("Login Failed");
});
app.all('*',function(req,res){
	res.send("Invalid URL !!");
});