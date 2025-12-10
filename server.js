require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const fs = require('fs').promises;
const { json } = require('stream/consumers');
const mongoose = require('mongoose');
const TodoRoutes = require('./src/routes/TodoRoutes');

const app = express();
app.use(cors());
app.use(express.json());


// MongoDB connection...

try {
    mongoose.connect(process.env.DB_string);
    console.log('database connected..');

    // Routes for DB
    app.use('/todos', TodoRoutes);
} catch (err) {
    console.error(err);
}

app.listen(process.env.PORT, () => console.log('Hy! so server is running..'));


























// const filePath = './Data.json';

// // Helper Function to read file.

// const readTodoData = async () => {
//     try {
//         const data = await fs.readFile(filePath, "utf-8");
//         return data.trim() ? JSON.parse(data) : [];

//     } catch (err) {
//         console.error("Error reading file")
//     }
// }

// // Helper function to write JSON file
// const writeTodos = async (todos) => {
//     try {
//         await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
//     } catch (err) {
//         console.error('Error writing file:', err);
//         throw err;
//     }
// };



// This is a GET request to get data...
// app.get('/todos', async (req, res) => {

//     try {
//         const todos = await readTodoData();
//         res.json(todos);
//     } catch (err) {
//         console.error(err)
//         return res.status(500).json({ msg: "Error in reading file..." })
//     }
// })

// // This is a POST request to share data
// app.post('/todos', async (req, res) => {

//     try {
//         const newTodo = req.body;
//         const fileTodo = await readTodoData();
//         fileTodo.push(newTodo);
//         await writeTodos(fileTodo);
//         res.json({ msg: "Todo saved successfully.." })

//     } catch (err) {
//         res.status(500).json({ msg: "Failed to save todo." })
//     }

// })

// This is a DELETE request to delete data...

// app.delete('/todos/:id', async (req, res) => {

//     try {
//         const _id = req.params.id

//         const fileTodo = await readTodoData();
//         const updatedTodo = fileTodo.filter(item => item._id !== _id);

//         await writeTodos(updatedTodo);
//         return res.json({ msg: "Todo successfully Deleted.. " });

//     } catch (err) {
//         res.status(500).json({ msg: "Failed to delete Todo." })
//     }

// })

// // This is a POST request to edit todo..
// app.put('/todos/:id', async (req, res) => {

//     try {
//         const _id = req.params.id;
//         const updatedText = req.body.text;

//         const fileTodo = await readTodoData();

//         const updatedTodo = fileTodo.map(todo => todo._id === _id ? { ...todo, text: updatedText } : todo);

//         console.log('put request...')
//         await writeTodos(updatedTodo);
//         return res.json({ msg: "Todo successfully updated... " });

//     } catch (err) {
//         res.status(500).json({ msg: "Failed to edit Todo.." });
//     }

// });




