const Task = require("../models/taskModel");

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(200).json(task); //if status 200,then send json task
    } catch(error){
        res.status(500).json({msg: error.message}) //if status 500, then send error message
    }
}

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find(); //find is a 
        res.status(200).json(tasks); //if status 200,then send json tasks
    } catch(error){
        res.status(500).json({msg: error.message}) //if status 500, then send error message
    }
}

module.exports = {
    createTask: createTask,
    getAllTasks: getAllTasks
}