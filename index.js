var express = require('express');
 
var app = express();//Respond with "deployeed" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('app deployed succesfully');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
