const express = require('express');
const {
    getUsers,
    getUsersById,
    updateUsers
} = require('../services/user.service')

const router = express.Router()

router.get('/', (req, res) => {
    try {
        const users = getUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)

    }
})

router.get('/:id', (req, res) => {
    try {
        const {
            id
        } = req.params;
        const users = getUsersById(id)
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)

    }
})

router.post('/', (req, res) => {
    try {
        res.status(200).send('good')
    } catch (error) {
        res.status(500).send('error')

    }
})

router.put('/:id', (req, res) => {
    try {
        const {
            id
        } = req.params;

        const {
            name,
            surname,
            email,
            pwd
        } = req.body;
        const users = updateUsers(id, name, surname, email, pwd)
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)

    }
})

router.delete('/:id', (req, res) => {
    try {
        res.status(200).send('good')
    } catch (error) {
        res.status(500).send('error')

    }
})

module.exports = router