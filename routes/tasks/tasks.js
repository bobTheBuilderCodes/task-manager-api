const express = require("express")
const { getTasks, getTask, updateTask, deleteTask, createTask } = require("../../controller/tasks/tasks")
const tasksRouter = express.Router()



tasksRouter.get("/", getTasks)
tasksRouter.post("/", createTask)
tasksRouter.get("/:id", getTask)
tasksRouter.patch("/:id", updateTask)
tasksRouter.delete("/:id", deleteTask)


module.exports = tasksRouter