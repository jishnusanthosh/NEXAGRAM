import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 4000;

// Connect to MongoDB using the URL from the .env file
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Access the default connection
const db = mongoose.connection;

// Handle the connection event
db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, MERN stack developer!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
