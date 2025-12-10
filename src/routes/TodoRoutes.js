const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


// GET all todos..
router.get('/', async (req, res) => {

    try {
        const todos = await Todo.find();
        return res.json(todos);
    } catch (err) {
        console.error(err)
        return res.status(500).json({ msg: "Error in reading file..." })
    }
});

// This is a POST request to share data..
router.post('/', async (req, res) => {
    
    const {_id,text,priority} = req.body;
    const todo = new Todo({_id,text,priority});
    try {
        const saved = await todo.save();
        return res.status(201).json({ msg: "Todo saved successfully.." })

    } catch (err) {
        return res.status(400).json({ msg: "Failed to save todo." })
    }

});
// This is a DELETE request to delete TODO..
router.delete('/:id', async (req, res) => {

    try {
        const _id = req.params.id

        await Todo.findByIdAndDelete(_id)
        return res.json({ msg: "Todo successfully Deleted.. " });

    } catch (err) {
        return res.status(500).json({ msg: "Failed to delete Todo." })
    }

})

// This is a POST request to edit todo..
router.put('/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const updatedText = req.body.text;

        const updatedTodo = await Todo.findByIdAndUpdate(_id,{text: updatedText}, {new:true});
        return res.json(updatedTodo);

    } catch (err) {
        return res.status(500).json({ msg: "Failed to edit Todo.." });
    }

});

module.exports = router;