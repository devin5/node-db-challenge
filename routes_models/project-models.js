const db = require("../data/dbconfig.js");

const getProjects = () => {
    return db("projects");
}

const addProject = (project) => {
    return db("projects").insert(project)
}
/*********retrieve project by id, retrieve tasks *************/

const getProjectById = (id) => {
    return db("projects").where({id}).first()
}

const addTask = (task) => {
    return db("tasks").insert(task)
}
const getTasks = (id) => {
    return db("tasks as t")
        .join("projects as p", "p.id", "=", "t.project_id")
        .where("project_id", "=", id)
        .select("t.id", "p.name", "p.description", "t.task_description", "t.notes", "t.completed", )
}

/*********export those functions!!!**************************/

module.exports = {
    getProjects,
    addProject,
    getProjectById,
    addTask, 
    getTasks
}
