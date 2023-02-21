// setup server
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var noteRouter = require('./route/noteRoute');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send('Hello World')
})

app.use("/api/v1",noteRouter)

app.listen(3000, function() {
  console.log('Server is running on port 3000..............')
})