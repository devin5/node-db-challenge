const express = require("express");
const resourceRouter = express.Router();
const Resources = require("./resource-models")

resourceRouter.get("/", (req, res) => {
    Resources.findResources()
        .then(resources => res.status(200).json(resources))
        .catch(err => res.status(500).json({ message: "The resources you are looking for cannot be retrieved at this time"}))
})

resourceRouter.post("/", (req, res) => {
    Resources.addResource(req.body)
        .then(resources => res.status(200).json(req.body))
        .catch(err => res.status(500).json({ message: "This resource cannot currently be added"}))
})

module.exports = resourceRouter;