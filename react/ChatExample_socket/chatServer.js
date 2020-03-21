const express = require('express')
const app = express()
const server = require('http').createServer(app)

const PORT = 3001
server.listen(PORT, ()=> {
  console.log('run server with port : ' + PORT)
})

//publicize public directory
app.use('/public', express.static('/public'))

app.get('/', (req, res) => {
  res.redirect(302, '/public')
})

//socket start
const socketio = require('socket.io')
const io = socketio.listen(server)

io.on('connection', (socket) => {
  console.log('client access : ' + socket.client.id)
  
  //receive message
  socket.on('chat-msg', (msg) => {
    //send message to all client
    io.emit('chat-msg, msg')
  })
})







