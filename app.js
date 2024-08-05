const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const server = express();

server.use(express.json());
server.use(userRoutes);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

server.listen(process.env.PORT, 'localhost', (e) => {
    e ? console.error(e.message) : console.log(`Работает на http://localhost:${process.env.PORT}`)
})


