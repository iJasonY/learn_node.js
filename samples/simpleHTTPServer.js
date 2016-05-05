var http = require('http');
server = http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/plain"});
  res.end("Hello Node.js\n");
})
server.listen(8000);
console.log("http start @8000");
