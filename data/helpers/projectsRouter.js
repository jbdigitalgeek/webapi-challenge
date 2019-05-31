const express = require('express');

const Projects = require('./projectModel');

const projectRouter = express.Router();

projectRouter.get('/', async (req, res) => {
    try {
      const projects = await Projects.get();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({error: 'Unable to get projects'});
    }
  });

projectRouter.get('/:id', async (req, res) => {
  
     try {
      const project = await Projects.get(req.params.id);
  
       if (project) {
        res.status(200).json(project);
      } else {
        res.status(400).json({message: 'Please provide an ID'});
      }
  
     } catch (err) {
      res.status(500).json({error: 'Unable to get project'});
    }
  });

projectRouter.post('/', async (req, res) => {
    let { name, description } = req.body;
  
     try {
      const newProject = Projects.insert({ name, description });
  
       if(!name || !description){
        res.status(400).json({error: 'Please provide a name and description'});
      } else {
        res.status(201).json(newProject);
      }
  
     } catch (err) { 
      res.status(500).json({error: 'Unable to post new project'});
    }
});
  
module.exports = projectRouter;