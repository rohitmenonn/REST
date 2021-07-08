const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import routes
const postRoute = require('./routes/posts');

const app = express();

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB");
});

// Middleware
app.use(express.json());

// Route middlewares
app.use('/posts', postRoute);

// Routes
app.get('/', (req,res) => {
    res.send("Home");
});

app.listen(3000, console.log("Server running"));
