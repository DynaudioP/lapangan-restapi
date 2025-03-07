require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const lapanganRoutes = require('./routes/lapangan');
const storeRoutes = require('./routes/store');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/lapangan', lapanganRoutes);
app.use('/api/store', storeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
