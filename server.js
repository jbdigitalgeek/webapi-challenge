const express = require('express');
const server = express();

const projectRouter = require('./data/helpers/projectsRouter.js');
const actionsRouter = require('./data/helpers/actionsRouter.js');

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`You're in the root directory, navigate to /projects to see projects or /actions to see the actions for each!`);
})

server.use('/projects', projectRouter);
server.use('/actions', actionsRouter);

module.exports = server;