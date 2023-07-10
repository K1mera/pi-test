const express = require('express');
const server = express()
const cors = require('cors');

const PORT = 3001


const route = require('./routes/severRouter.routes')
server.use(express.json());
server.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST']
  })
);


server.get('/', (req, res) => {
    res.send("I'm in")
});

server.use('/', route)




module.exports = server;