var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// var logger = function(req, res, next){
//   console.log('Logging...');
//   next();
// }
//
// app.use(logger)

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@gmail.com'
  },
  {
    id: 1,
    first_name: 'Bob',
    last_name: 'Smith',
    email: 'bobsmith@gmail.com'
  },
  {
    id: 1,
    first_name: 'Jill',
    last_name: 'Jackson',
    email: 'jilljackson@gmail.com'
  }
]

app.get('/', function(req, res) {
  var title = 'Customers';
  res.render('index', {
    title: title,
    users: users
  });
})

app.listen(3000, function(){
  console.log('Server Started on Port 3000....');
});
