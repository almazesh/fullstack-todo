const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// POST


router.post('/api/todo', async (req , res) => {
  try{
    const todo = await Todo({
      todo:req.body.todo
    }).save();
    res.status(200).json(todo)
  }catch (error) {
    res.json(error);
  }
});

// GET 

router.get('/api/todos', async (req , res) => {
  try {
    const allTodo = await Todo.find({});
    res.status(200).json(allTodo)
  }catch (error) {
    res.json(error);
  }
});

// PUT

router.put("/api/todo/:id" , async (req , res) => {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(
      {_id: req.params.id},
      req.body 
    );
    res.status(200).json("Item updated!")
  } catch (error) {
    res.json(error);
  }
});

// DELETE

router.delete("/api/todo/:id" , async (req , res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json('Todo Deleted')
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
