// Create web server
// npm install express
// npm install body-parser
// npm install ejs

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var comments = [
    {name: 'John', comment: 'Hello'},
    {name: 'Jane', comment: 'How are you?'},
    {name: 'Joe', comment: 'Goodbye'}
];

app.get('/', function(req, res){
    res.render('comments', {comments: comments});
});

app.post('/comments', function(req, res){
    var name = req.body.name;
    var comment = req.body.comment;
    comments.push({name: name, comment: comment});
    res.redirect('/');
});

app.listen(8000, function(){
    console.log('Server running at http://localhost:8000');
});