const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new socketio.Server(server, {
  cors: {
    origin: "*"
  }
});

app.get('/', (req, res) => {
  res.send("Hello World");
})
// io => server
// socket => client
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log("user disconnected")
  })
  socket.on('sendMessage', (message, sender) => {
    // io.emit => servera bağlı tüm clientlara (çağıran kişide dahil) sinyal gönderir
    // socket.emit => sadece çağıran kişiye sinyal gönderir
    // socket.brodcast.emit => çağıran kişi hariç diğer tüm bağlı clientlara sinyal gönderir..

    // kanallar =>
    // socket.brodcast.to('kanalIsmi').emit => bir kanala üye olmuş gönderen kişi hariç tüm clientlara sinyal gönderir
    // io.in('kanalIsmi').emit() => kanaldaki gönderen kişi dahil herkese sinyal gönderir

    // id=>
    // socket.braodcast.to(id) => spesifik tek bir kişiye (id varsa) mesaj gönderir..
    socket.broadcast.emit("messageSent", message, sender);
  })
})

app.get('/products', (req, res) => {
  res.send([1, 2, 3, 4])
})

server.listen(9000);

