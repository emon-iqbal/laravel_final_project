var express 	= require('express');
var apiResponse = require("express-api-response");
var upload = require('express-fileupload');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var registration = require('./controller/registration');
var home 		= require('./controller/home');
var available 		= require('./controller/available');
var logout 		= require('./controller/logout');
var app 		= express();

//config
app.set('view engine', 'ejs');




//middleware
app.use(upload());
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use('/abc', express.static('assets'));
app.use('/def', express.static('assets'));
app.use('/registration', registration);
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/available', available);
app.use(express.static(__dirname+"/"));




app.get('/', function(req, res){
	res.send("<fieldset><center><h1><font color='green'>Index Page</font></h1></center><center> <a href='/registration'> Registration</a> | <a href='/login'> Login</a> </center> </fieldset>");
});

app.listen(3000, function(){
	console.log('express http server started at...3000');
});