const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social-media-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, MERN stack developer!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
