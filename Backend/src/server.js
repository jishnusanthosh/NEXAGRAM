import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

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

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
