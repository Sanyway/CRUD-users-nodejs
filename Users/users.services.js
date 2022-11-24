
const userControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  const data = userControllers.findAllUsers();
  if (!data[0]) {
    res.status(200).json({message: 'data base is empty, there is no info to show'});
  } else {
    res.status(200).json(data)
  }
  
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
    res.status(404).json({ message: "The ID has been deleted ot doesn't exits" });
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
};

const addUserById = (req, res) => {
  const id = req.params.id
  const { first_name, last_name, email, password, birthday } = req.body;
  if (id && first_name && email) {
   
    const data = userControllers.addSingleUser({ first_name, last_name, email, password, birthday }, id);
    res.status(201).json({message: 'user by ID succesfully created or updated', NewUserInfo: data});

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

const deleteUser = (req, res) => {
  const id = req.params.id
const data = userControllers.deleteUserById(id)

if (data) {
  // Success
  // Delete user by Id
  res.status(200).json({message: `ID #${id} succesfully deleted`});
} else {
  // Error
  res.status(404).json({ message: "The ID has been deleted ot doesn't exist" });
}

}
module.exports = {
  getAllUsers,
  getUserById,
  getRandomUser,
  postNewUser,
  addUserById,
  deleteUser
}

