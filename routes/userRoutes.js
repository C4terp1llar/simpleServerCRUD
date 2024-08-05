const express = require('express');
const User = require("../models/user");
const {getUsers, getUser, deleteUser, addUser, updateUser} = require("../controllers/userController");

const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.delete('/users/:id', deleteUser)
router.post('/users', addUser)
router.patch('/users/:id', updateUser)

module.exports = router;