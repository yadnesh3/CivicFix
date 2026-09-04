const User = require("../models/User");

// Create a new user
const createUser = async (req, res) => {
try {
const user = await User.create(req.body);


res.status(201).json({
  message: "User created successfully",
  user
});


} catch (error) {
res.status(500).json({
message: "Failed to create user",
error: error.message
});
}
};

// Get all users
const getUsers = async (req, res) => {
try {
const users = await User.find();


res.status(200).json(users);


} catch (error) {
res.status(500).json({
message: "Failed to get users",
error: error.message
});
}
};

// Get a single user
const getUserById = async (req, res) => {
try {
const user = await User.findById(req.params.id);


if (!user) {
  return res.status(404).json({
    message: "User not found"
  });
}

res.status(200).json(user);


} catch (error) {
res.status(500).json({
message: "Failed to get user",
error: error.message
});
}
};

// Update a user
const updateUser = async (req, res) => {
try {
const user = await User.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true, runValidators: true }
);


if (!user) {
  return res.status(404).json({
    message: "User not found"
  });
}

res.status(200).json({
  message: "User updated successfully",
  user
});


} catch (error) {
res.status(500).json({
message: "Failed to update user",
error: error.message
});
}
};

// Delete a user
const deleteUser = async (req, res) => {
try {
const user = await User.findByIdAndDelete(req.params.id);


if (!user) {
  return res.status(404).json({
    message: "User not found"
  });
}

res.status(200).json({
  message: "User deleted successfully"
});


} catch (error) {
res.status(500).json({
message: "Failed to delete user",
error: error.message
});
}
};

module.exports = {
createUser,
getUsers,
getUserById,
updateUser,
deleteUser
};
