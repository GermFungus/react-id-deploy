var port = process.env.PORT || 4000;
var express = require("express");
var app  = express();
var path = require("path");
var http = require("http")

app.use(express.static(path.join(__dirname,"static-portfolio")));
app.get("/" , (req, res, next) => {
    res.sendFile(path.join(__dirname,"static-portfolio/index.html"));
});
var server = http.createServer(app);
server.listen(port , ()=>{
    console.log("Started On port 4000")
});