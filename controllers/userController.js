const User = require("../models/user");

const handleError = (res, err) => {
    res.status(500).json({error: err});
}

const getUsers = (req, res) => {
    User
        .find()
        .then((users) => res.status(200).json(users))
        .catch((err) => handleError(res, err))
}

const getUser = (req, res) => {
    User
        .findById(req.params.id)
        .then((user) => {
            user ? res.status(200).json(user) : res.status(200).json(user)
        })
        .catch((err) => handleError(res, err))
}

const deleteUser = (req, res) => {
    User
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => handleError(res, err))
}

const addUser = (req, res) => {
    const user = new User(req.body);

    user
        .save()
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => handleError(res, err))
}

const updateUser = (req, res) => {
    User
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => handleError(res, err))
}

module.exports = {
    getUsers, getUser, deleteUser, addUser, updateUser
}