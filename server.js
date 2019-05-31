const express = require('express');
const server = express();

const projectsRouter = require('./data/helpers/projectsRouter.js');
const actionsRouter = require('./data/helpers/actionsRouter.js');

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`You're in the root directory`);
})

// server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);

module.exports = server;