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



