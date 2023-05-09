const userModel = require('../model/usersModels');

const getAllUsers = async (req, res) => {
  const result = await userModel.getAllUsers();
  if (result.error) {
    res.status(500).json(result);
  } else {
    res.status(200).json(result);
  }
};

module.exports = {
  getAllUsers,
};