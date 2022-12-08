const fs = require('fs')
const path = 'storage/user.json'

function getUsers() {
    const users = JSON.parse(fs.readFileSync(path))
    return users;
}

function getUsersById(id) {
    const users = JSON.parse(fs.readFileSync(path))
    const filtered = users.filter(el => el.id == id)
    return filtered;
}

function updateUsers(id, name, surname, email, pwd) {
    const users = JSON.parse(fs.readFileSync(path))
    const filtered = users.filter(el => el.id != id)
    if (users.length == filtered.length) throw new Error('error')
    filtered.push({
        id,
        name,
        surname,
        email,
        pwd
    })
    fs.writeFileSync(path, JSON.stringify(filtered), 'utf8')
    return filtered
}

module.exports = {
    getUsers,
    getUsersById,
    updateUsers
}