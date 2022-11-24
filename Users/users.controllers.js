const usersDB = []
let id = 1


const findAllUsers = () => {
    return usersDB.filter(undef => undef != 'undefined')
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

const addSingleUser = (obj, id) => {
    const singleUserInfo = {
        id: id,
        first_name: obj.first_name,
        last_name: obj.last_name || '',
        email: obj.email,
        password: obj.password || '',
        birthday: obj.birthday || ''
    }
    usersDB.splice(id - 1, 1, singleUserInfo)

    return singleUserInfo
}


const deleteUserById = (id) => {
    let position = id - 1
    if(usersDB[position] && usersDB[position] !== 'undefined' ){
    usersDB.splice(position, 1, 'undefined')
    if (id <= usersDB.length && id > 0) {
        
        return 1   
    }
}  else {
        return ''
    }


}
module.exports = {
    findAllUsers,
    findUserById,
    findUserByName,
    createNewUser,
    findRandomUser,
    addSingleUser,
    deleteUserById
}