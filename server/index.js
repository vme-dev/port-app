var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
  
var app = express();
var bodyParser = require('body-parser');

var Router = require('./router/index.js');
var adminRouter = require('./router/adminRouter.js');

var keys = require('./keys');

app.use('/', express.static(__dirname + '/public'));

var myLogger = function (req, res, next) {
  console.log(__dirname + req.path);
  next();
};


app.use(bodyParser.json({
    extended: true
}));
app.use(myLogger);


mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })
	.then(() => console.log('MongoDB connected.'))
  .catch(err => console.log(err))
  
app.use('/api',Router);

adminRouter(app);

app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening on port 8000!');
});