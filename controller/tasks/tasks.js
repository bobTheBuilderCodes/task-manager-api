const Task = require("../../models/Tasks");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if(!task){
        return res.status(404).json({message: `Task with ID ${taskID} does not exist.`})
    }
    res.status(200).json({ task });
  } catch (error) { res.status(500).json({message: error})}
 
};



const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
    
        res.json({ message: "Tasks created successfully", task });
        
    } catch (error) {
        res.status(500).json({message: 'error'})
    }
  console.log(req.body);
};

const updateTask = async(req, res) => {
    try {
        const { id: taskID } = req.params;
        const updatedTask = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        })

        if(!taskID){
            return res.status(404).json(`Item with ID ${taskID} not found`)
        }
        res.json({ message: "Task updated successfully", updatedTask });
    } catch (error) {
        res.status(500).json({message: "Sorry, something went wrong while updating the task item"})
    }
};

const deleteTask = async (req, res) => {

    try {
      const { id: taskID } = req.params;
      const task = await Task.findOneAndDelete({ _id: taskID });
  
      if(!task){
          return res.status(404).json({message: `Task with ID ${taskID} does not exist.`})
      }
      res.status(200).json({ message: `Task with ID ${taskID} was deleted successfully` });
    } catch (error) { res.status(500).json({message: error})}
   
  };

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
