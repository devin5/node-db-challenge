const express = require("express");
const projectRouter = express.Router();
const Projects = require("./project-models");

/********************projects********************/
projectRouter.get("/", (req, res) => {
    Projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json({ message: "could not retrieve projects; go drink a root beer float!!!"}))
})

projectRouter.post("/", (req, res) => {
    Projects.addProject(req.body)
        .then(projects => res.status(200).json(req.body))
})

projectRouter.get("/:id", (req, res) => {
    Projects.getProjectById(req.params.id)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(500).json({ message: "We can't find that project!!!"}))
})

/************************tasks******************/
projectRouter.post("/tasks", (req, res) => {
    Projects.addTask(req.body)
        .then(project => res.status(200).json(req.body))
        .catch(err => res.status(500).json({ message: "We cannot add this task at this time."}))
})

projectRouter.get("/:id/tasks", (req, res) => {
    Projects.getTasks(req.params.id)
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(500).json({ message: "We cannot retrieve those tasks at this time."}))
})
/***********************exports*****************/

module.exports = projectRouter;