const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const {createTask, getAllTasks} = require("../controllers/taskController");

//Create a Task
router.post("/api/tasks", createTask);

//Get all Tasks
router.get("/api/tasks", getAllTasks);


module.exports = router;