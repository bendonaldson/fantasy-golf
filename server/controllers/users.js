import User from "../models/User.js";

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const { firstName, lastName, email, password } = req.body;

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.password = password || user.password;

    await user.save();
    return res.status(200).json({ message: "User updated sucessfully!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    await User.deleteOne({ _id: id });

    return res.status(200).json({ message: "User deleted sucessfully!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json({ message: "No users found!" });
    }

    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const { admin } = req.body;

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    user.admin = admin;

    await user.save();
    return res.status(200).json({ message: "User role updated sucessfully!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
