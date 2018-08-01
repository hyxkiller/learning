var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
    res.sendfile(__dirname + '/index.html');
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});

io.on('connection', (socket) => {
    console.log('hello');
    socket.on('hello', (e) => {
        console.log('msg:' + e );
        io.emit('chat message', e)
    })
    socket.on('disconnect', () => {
        console.log('disconnect');
    })
})
