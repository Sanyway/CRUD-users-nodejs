
const userControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  const data = userControllers.findAllUsers();
  res.status(200).json(data);
};



const getUserById = (req, res) => {
  const id = req.params.id;
  // Find user by Id
  const data = userControllers.findUserById(id);
  // Find user by Name
  const dataName = userControllers.findUserByName(id)

  if (data) {
    // Success
    // Find user by id
    res.status(200).json(data);
  } else if (dataName) {
    // Find user by name
    res.status(200).json(dataName)
  } else {
    // Error
    res.status(404).json({ message: "Invalid ID" });
  }
};



const postNewUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  if (first_name && email) {
   
    const data = userControllers.createNewUser({ first_name, last_name, email, password, birthday });
    res.status(201).json(data);

  } else if (!first_name && !last_name && !password && !email && !birthday){
    res.status(400).json({
      message: "Invalid Data",
      fields: {
        first_name: 'string*',
        last_name: 'string',
        email: 'string*',
        password: 'string',
        birthday: 'YYYY/MM/DD'
      },
  });

  } else {
    res.status(400).json({ 
      message: "At least first_name and email are neccesary to continue",
      fields: {
        first_name: 'string*',
        last_name: 'string',
        email: 'string*',
        password: 'string',
        birthday: 'YYYY/MM/DD'
    
      },
    });
  }
};



const getRandomUser = (req, res) => {
  const data = userControllers.findRandomUser()
  if (data) {
    // Success
    res.status(200).json(data)
  } else {
    // Error
    res.status(400).json({
      message: 'DB is empty'
    })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getRandomUser,
  postNewUser
}

