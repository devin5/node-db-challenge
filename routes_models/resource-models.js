const db = require("../data/dbconfig.js");

const findResources = () => {
    return db("resources");
}

const addResource = resource => {
    return db("resources").insert(resource)
}

module.exports = {
    findResources,
    addResource
}