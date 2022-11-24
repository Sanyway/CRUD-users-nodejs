const usersDB = []
let id = 1


const findAllUsers = () => {
    return usersDB
}


const findUserById = (id) => {

    const filteredId = usersDB.find(user => user.id == id)
    return filteredId

}


const findUserByName = (name) => {
   
const filteredName = usersDB.find(user => user.first_name == name)
return filteredName

}

const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name || '',
        email: obj.email,
        password: obj.password || '',
        birthday: obj.birthday || ''
    }


    usersDB.push(newUser)
    return newUser
}

const findRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * usersDB.length)
    return usersDB[randomIndex]
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByName,
    createNewUser,
    findRandomUser
}