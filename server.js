const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`You're in the root directory`);
})

module.exports = server;