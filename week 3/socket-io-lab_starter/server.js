var http = require('http')
  , url = require('url')
  , fs = require('fs')
  , server;


server = http.createServer(function(req, res){
  
  var path = url.parse(req.url).pathname;
  switch (path){
    case '/':
      fs.readFile(__dirname + '/index.html', function(err, data){
          if (err) return send404(res);
          res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
          res.write(data, 'utf8');
          res.end();
      });
      break;

    default: send404(res);
  }
}),

send404 = function(res){
  res.writeHead(404);
  res.write('404');
  res.end();
};

server.listen(3000);

// socket.io, setup
var io = require('socket.io')(server);

// setup socket listeners here

io.on("connection", (socket) => {
  console.log("Socket Connected!")

  socket.on("disconnect", () => {
    console.log("Socket Disconnected")
  })
 
  socket.on("message", (object) => {
    console.log("Socket Data: " + object.data)
  })
})