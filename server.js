var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/public'))
app.use('/public', express.static('./public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/test',function(req,res){
  res.sendFile(path.join(__dirname+'/views/test.html'));
});

app.get('/choose',function(req,res){
  res.sendFile(path.join(__dirname+'/views/choose.html'));
});

app.listen(3000);

console.log("Running at Port 3000");