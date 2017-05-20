// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// Connect to Mongo Db
mongoose.connect('mongodb://localhost/contactlist');

// on Connection
mongoose.connection.on('connnected', ()=>{
    console.log('Connected to Database');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error Database connection is \n'+err)
    }
    console.log('Error occured in connection');
})

// Defining PORT
const port = 6544;

// Adding Middleware
app.use(cors());
app.use(bodyparser.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', route);

// Testing server
app.get('/',(req, res)=>{
    res.send('Hello World is working');
})

app.listen(port, ()=>{
    console.log('Server started at PORT: '+port);
})